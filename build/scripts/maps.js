"use strict";
/*
Copyright © BalaM314, 2025. All Rights Reserved.
Unfinished.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var funcs_1 = require("./funcs");
var io_1 = require("./io");
var FinishedMapRun = /** @class */ (function (_super) {
    __extends(FinishedMapRun, _super);
    function FinishedMapRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinishedMapRun.prototype.duration = function () {
        return this.startTime - this.endTime;
    };
    return FinishedMapRun;
}((0, io_1.dataClass)()));
var PartialMapRun = /** @class */ (function () {
    function PartialMapRun() {
        this.startTime = Date.now();
        this.maxPlayerCount = 0;
    }
    /** In milliseconds */
    PartialMapRun.prototype.duration = function () {
        return Date.now() - this.startTime;
    };
    PartialMapRun.prototype.update = function () {
        this.maxPlayerCount = Math.max(this.maxPlayerCount, Groups.player.size());
    };
    PartialMapRun.prototype.finish = function (_a) {
        var winTeam = _a.winTeam;
        return new FinishedMapRun({
            mapName: Vars.state.map.plainName(),
            winTeam: winTeam,
            success: winTeam == Vars.state.rules.defaultTeam,
            startTime: this.startTime,
            endTime: Date.now(),
            maxPlayerCount: this.maxPlayerCount
        });
    };
    //Used for continuing through a restart
    PartialMapRun.prototype.write = function () {
        return "".concat(Date.now() - this.startTime, "/").concat(this.maxPlayerCount);
    };
    PartialMapRun.read = function (data) {
        var _a = __read(data.split("/").map(Number), 2), duration = _a[0], maxPlayerCount = _a[1];
        if (isNaN(duration) || isNaN(maxPlayerCount)) {
            Log.err("_FINDTAG_ failed to load map run stats data: ".concat(data));
        }
        var out = new PartialMapRun();
        out.startTime = Date.now() - duration; //subtract the time when the server was off
        out.maxPlayerCount = maxPlayerCount;
        return out;
    };
    return PartialMapRun;
}());
var FMap = /** @class */ (function () {
    function FMap(map, runs) {
        if (runs === void 0) { runs = []; }
        this.map = map;
        this.runs = runs;
    }
    FMap.prototype.id = function () {
        return "".concat(this.map.name(), "-").concat(this.map.file.name());
    };
    FMap.read = function (data) {
        return funcs_1.StringIO.read(data, function (str) { return new FMap(null); }); //TODO
    };
    FMap.prototype.write = function () {
        var _this = this;
        return funcs_1.StringIO.write(this, function (str) {
            str.writeString(_this.map.name(), 3);
            str.writeArray(_this.runs, function (run) {
                str.writeString(run.mapName);
            });
        });
    };
    FMap.maps = {};
    FMap.serializer = new io_1.Serializer(["object", [
            ["runs", ["array", "u32", ["class", FinishedMapRun, [
                            ["mapName", ["string"]],
                            ["startTime", ["number", "i64"]],
                            ["endTime", ["number", "i64"]],
                            ["maxPlayerCount", ["number", "u8"]],
                            ["success", ["boolean"]],
                            ["winTeam", ["team"]],
                        ]]]]
        ]]);
    return FMap;
}());
