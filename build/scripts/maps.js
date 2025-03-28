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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FMap = exports.PartialMapRun = exports.FinishedMapRun = void 0;
var funcs_1 = require("./funcs");
var globals_1 = require("./globals");
var io_1 = require("./io");
var FinishedMapRun = /** @class */ (function (_super) {
    __extends(FinishedMapRun, _super);
    function FinishedMapRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinishedMapRun.prototype.duration = function () {
        return this.endTime - this.startTime;
    };
    FinishedMapRun.prototype.outcome = function () {
        if (this.success)
            return ["win", "win"];
        else if (this.winTeam === Team.derelict) {
            if (this.duration() > 180000)
                return ["loss", "late rtv"];
            return ["rtv", "early rtv"];
        }
        else
            return ["loss", "loss"];
    };
    return FinishedMapRun;
}((0, io_1.dataClass)()));
exports.FinishedMapRun = FinishedMapRun;
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
    PartialMapRun.prototype.finish = function (_b) {
        var winTeam = _b.winTeam;
        return new FinishedMapRun({
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
        var _b = __read(data.split("/").map(Number), 2), duration = _b[0], maxPlayerCount = _b[1];
        if (isNaN(duration) || isNaN(maxPlayerCount)) {
            Log.err("_FINDTAG_ failed to load map run stats data: ".concat(data));
        }
        var out = new _a();
        out.startTime = Date.now() - duration; //move start time forward by time when the server was off
        out.maxPlayerCount = maxPlayerCount;
        return out;
    };
    var _a;
    _a = PartialMapRun;
    PartialMapRun.key = "fish-partial-map-run";
    PartialMapRun.current = null;
    (function () {
        globals_1.FishEvents.on("saveData", function () {
            if (_a.current)
                Core.settings.put(_a.key, _a.current.write());
        });
        globals_1.FishEvents.on("loadData", function () {
            var data = Core.settings.getString(_a.key);
            if (data) {
                _a.current = _a.read(data);
            }
            else {
                //loading a map, but there is no run information, create one
                _a.current = new _a();
            }
        });
        Events.on(EventType.SaveLoadEvent, function (e) {
            var _b;
            //create a new run, if there isn't one already
            //loadData will have run first if it is a server restart
            (_b = _a.current) !== null && _b !== void 0 ? _b : (_a.current = new _a());
        });
        Timer.schedule(function () {
            var _b;
            (_b = _a.current) === null || _b === void 0 ? void 0 : _b.update();
        }, 0, 5);
        Events.on(EventType.GameOverEvent, function (e) {
            var _b;
            if (_a.current) {
                //Add a new map run
                (_b = FMap.getCreate(Vars.state.map)) === null || _b === void 0 ? void 0 : _b.runs.push(_a.current.finish({ winTeam: e.winner }));
            }
            Core.settings.remove(_a.key);
            _a.current = null;
        });
    })();
    return PartialMapRun;
}());
exports.PartialMapRun = PartialMapRun;
var FMap = function () {
    var _b;
    var _classSuper = (0, io_1.dataClass)();
    var _static_allMaps_decorators;
    var _static_allMaps_initializers = [];
    var _static_allMaps_extraInitializers = [];
    return _b = /** @class */ (function (_super) {
            __extends(FMap, _super);
            function FMap(data, 
            //O(n^2)... should be fine?
            map) {
                if (map === void 0) { map = Vars.maps.customMaps().find(function (m) { return m.file.name() === data.mapFileName; }); }
                var _this = _super.call(this, data) || this;
                _this.map = map;
                return _this;
            }
            FMap.getCreate = function (map) {
                var mapFileName = map.file.name();
                if (Object.prototype.hasOwnProperty.call(this.maps, mapFileName))
                    return this.maps[mapFileName];
                var fmap = new this({
                    runs: [],
                    mapFileName: mapFileName
                }, map);
                this.maps[mapFileName] = fmap;
                this.allMaps.push(fmap);
                return fmap;
            };
            FMap.prototype.stats = function () {
                var allRunCount = this.runs.length;
                var victories = this.runs.filter(function (r) { return r.outcome()[1] === "win"; }).length;
                var losses = this.runs.filter(function (r) { return r.outcome()[0] === "loss"; }).length;
                var earlyRTVs = this.runs.filter(function (r) { return r.outcome()[1] === "early rtv"; }).length;
                var lateRTVs = this.runs.filter(function (r) { return r.outcome()[1] === "late rtv"; }).length;
                var significantRunCount = allRunCount - earlyRTVs;
                var totalLosses = losses + lateRTVs;
                var durations = this.runs.map(function (r) { return r.duration() / 1000; }); //convert to seconds
                var durationStats = (0, funcs_1.computeStatistics)(durations);
                return {
                    allRunCount: allRunCount,
                    significantRunCount: significantRunCount,
                    victories: victories,
                    losses: losses,
                    totalLosses: totalLosses,
                    earlyRTVs: earlyRTVs,
                    lateRTVs: lateRTVs,
                    earlyRTVRate: earlyRTVs / allRunCount,
                    winRate: victories / significantRunCount,
                    lossRate: losses / significantRunCount,
                    averagePlaytime: durationStats.average,
                    shortestWinTime: Math.min.apply(Math, __spreadArray([], __read(this.runs.filter(function (r) { return r.outcome()[0] === "win"; }).map(function (r) { return r.duration(); })), false)),
                    longestTime: durationStats.highest,
                    averageHighestPlayerCount: (0, funcs_1.computeStatistics)(this.runs.map(function (r) { return r.maxPlayerCount; })).average,
                };
            };
            return FMap;
        }(_classSuper)),
        (function () {
            var _c;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_c = _classSuper[Symbol.metadata]) !== null && _c !== void 0 ? _c : null) : void 0;
            _static_allMaps_decorators = [(0, io_1.serialize)("fish-map-data", function () { return ["array", "u16", ["class", FMap, [
                            ["runs", ["array", "u32", ["class", FinishedMapRun, [
                                            ["startTime", ["number", "i64"]],
                                            ["endTime", ["number", "i64"]],
                                            ["maxPlayerCount", ["number", "u8"]],
                                            ["success", ["boolean"]],
                                            ["winTeam", ["team"]],
                                        ]]]],
                            ["mapFileName", ["string"]],
                        ]]]; })];
            __esDecorate(null, null, _static_allMaps_decorators, { kind: "field", name: "allMaps", static: true, private: false, access: { has: function (obj) { return "allMaps" in obj; }, get: function (obj) { return obj.allMaps; }, set: function (obj, value) { obj.allMaps = value; } }, metadata: _metadata }, _static_allMaps_initializers, _static_allMaps_extraInitializers);
            if (_metadata) Object.defineProperty(_b, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _b.allMaps = __runInitializers(_b, _static_allMaps_initializers, []),
        _b.maps = (__runInitializers(_b, _static_allMaps_extraInitializers), {}),
        (function () {
            globals_1.FishEvents.on("dataLoaded", function () {
                //This event listener runs after the data has been loaded into allMaps
                _b.allMaps.forEach(function (map) {
                    _b.maps[map.mapFileName] = map;
                });
                //create all the data
                Vars.maps.customMaps().each(function (m) { return void _b.getCreate(m); });
            });
        })(),
        _b;
}();
exports.FMap = FMap;
