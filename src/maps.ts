/*
Copyright © BalaM314, 2025. All Rights Reserved.
Unfinished.
*/

import { FishEvents } from './globals';
import { dataClass, serialize } from './io';

type FinishedMapRunData = {
	winTeam:Team;
	success:boolean; //winTeam == Vars.state.rules.defaultTeam
	startTime:number;
	endTime:number;
	maxPlayerCount:number;
}
class FinishedMapRun extends dataClass<FinishedMapRunData>() {
	duration(){
		return this.endTime - this.startTime;
	}
}

class PartialMapRun {
	static readonly key = "fish-partial-map-run";
	static current: PartialMapRun | null = null;
	static {
		FishEvents.on("saveData", () => {
			if(this.current) Core.settings.put(this.key, this.current.write());
		});
		FishEvents.on("loadData", () => {
			const data = Core.settings.getString(this.key);
			if(data){
				this.current = this.read(data);
			} else {
				//loading a map, but there is no run information, create one
				this.current = new this();
			}
		});
		Events.on(EventType.SaveLoadEvent, e => {
			//create a new run, if there isn't one already
			//loadData will have run first if it is a server restart
			this.current ??= new this();
		});
		Timer.schedule(() => {
			this.current?.update();
		}, 0, 5);
		Events.on(EventType.GameOverEvent, e => {
			if(this.current){
				//Add a new map run
				FMap.getCreate(Vars.state.map)?.runs.push(
					this.current.finish({winTeam: e.winner})
				);
			}
			Core.settings.remove(this.key);
			this.current = null;
		});
	}

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
		out.startTime = Date.now() - duration; //move start time forward by time when the server was off
		out.maxPlayerCount = maxPlayerCount;
		return out;
	}
}


type FMapData = {
	runs: FinishedMapRun[];
	mapFileName: string;
};
export class FMap extends dataClass<FMapData>() {
	constructor(
		data:FMapData,
		//O(n^2)... should be fine?
		public map:MMap | null = Vars.maps.customMaps().find(m => m.file.name() === data.mapFileName)
	){ super(data); }

	@serialize("fish-map-data", () => ["array", "u16", ["class", FMap, [
		["runs", ["array", "u32", ["class", FinishedMapRun, [
			["startTime", ["number", "i64"]],
			["endTime", ["number", "i64"]],
			["maxPlayerCount", ["number", "u8"]],
			["success", ["boolean"]],
			["winTeam", ["team"]],
		]]]],
		["mapFileName", ["string"]],
	]]])
	static allMaps:FMap[] = [];
	private static maps:Record<string, FMap> = {};
	static {
		FishEvents.on("dataLoaded", () => {
			//This event listener runs after the data has been loaded into allMaps
			FMap.allMaps.forEach(map => {
				FMap.maps[map.mapFileName] = map;
			});
			//create all the data
			Vars.maps.customMaps().each(m => void FMap.getCreate(m));
		});
	}

	static getCreate(map:MMap){
		const mapFileName = map.file.name();
		if(Object.prototype.hasOwnProperty.call(this.maps, mapFileName))
			return this.maps[mapFileName];
		const fmap = new this({
			runs: [],
			mapFileName
		}, map);
		this.maps[mapFileName] = fmap;
		this.allMaps.push(fmap);
		return fmap;
	}
}
