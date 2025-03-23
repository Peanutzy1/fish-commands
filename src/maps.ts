/*
Copyright © BalaM314, 2025. All Rights Reserved.
Unfinished.
*/

import { StringIO } from './funcs';
import { dataClass, SerializableData, Serializer } from './io';

type FinishedMapRunData = {
	mapName:string;
	winTeam:Team;
	success:boolean; //winTeam == Vars.state.rules.defaultTeam
	startTime:number;
	endTime:number;
	maxPlayerCount:number;
}
class FinishedMapRun extends dataClass<FinishedMapRunData>() {
	duration(){
		return this.startTime - this.endTime;
	}
}

class PartialMapRun {
	startTime:number = Date.now();
	maxPlayerCount:number = 0;
	/** In milliseconds */
	duration(){
		return Date.now() - this.startTime;
	}
	update(){
		this.maxPlayerCount = Math.max(this.maxPlayerCount, Groups.player.size());
	}
	finish({winTeam}:{
		winTeam: Team;
	}):FinishedMapRun {
		return new FinishedMapRun({
			mapName: Vars.state.map.plainName(),
			winTeam,
			success: winTeam == Vars.state.rules.defaultTeam,
			startTime: this.startTime,
			endTime: Date.now(),
			maxPlayerCount: this.maxPlayerCount
		});
	}
	//Used for continuing through a restart
	write():string {
		return `${Date.now() - this.startTime}/${this.maxPlayerCount}`;
	}
	static read(data:string):PartialMapRun {
		const [duration, maxPlayerCount] = data.split("/").map(Number);
		if(isNaN(duration) || isNaN(maxPlayerCount)){
			Log.err(`_FINDTAG_ failed to load map run stats data: ${data}`);
		}
		const out = new PartialMapRun();
		out.startTime = Date.now() - duration; //subtract the time when the server was off
		out.maxPlayerCount = maxPlayerCount;
		return out;
	}
}

class FMap {
	static maps:Record<string, FMap> = {};
	static serializer = new Serializer<SerializableData<FMap>>(["object", [
		["runs", ["array", "u32", ["class", FinishedMapRun, [
			["mapName", ["string"]],
			["startTime", ["number", "i64"]],
			["endTime", ["number", "i64"]],
			["maxPlayerCount", ["number", "u8"]],
			["success", ["boolean"]],
			["winTeam", ["team"]],
		]]]]
	]]);
	constructor(
		public map: MMap,
		public runs:FinishedMapRun[] = [],
	){}

	id(){
		return `${this.map.name()}-${this.map.file.name()}`;
	}

	static read(data:string):FMap {
		return StringIO.read(data, str => new FMap(null!)); //TODO
	}
	write(){
		return StringIO.write(this, str => {
			str.writeString(this.map.name(), 3);
			str.writeArray(this.runs, run => {
				str.writeString(run.mapName)
			});
		})
	}
}
