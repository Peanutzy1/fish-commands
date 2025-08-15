"use strict";
/*
Copyright © BalaM314, 2025. All Rights Reserved.
This file contains most in-game chat commands that can be run by untrusted players.
*/
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var api = require("/api");
var commands_1 = require("/commands");
var config_1 = require("/config");
var funcs_1 = require("/funcs");
var globals_1 = require("/globals");
var maps_1 = require("/maps");
var menus_1 = require("/menus");
var players_1 = require("/players");
var ranks_1 = require("/ranks");
var utils_1 = require("/utils");
var votes_1 = require("/votes");
exports.commands = (0, commands_1.commandList)(__assign(__assign({ about: {
        args: [],
        description: 'Prints information about the plugin.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var _b, _c;
            var output = _a.output;
            output("[accent][cyan]fish-commands[] is the monolithic plugin used for the Fish servers' features.\n[accent]==========\n[accent]Source code available at: [cyan]https://github.com/Fish-Community/fish-commands/\n[accent]Current plugin version: [cyan]".concat((_c = (_b = globals_1.fishPlugin.version) === null || _b === void 0 ? void 0 : _b.slice(0, 8)) !== null && _c !== void 0 ? _c : "[scarlet]null[]", "[]"));
        }
    }, unpause: (0, commands_1.command)({
        args: [],
        description: 'Unpauses the game.',
        perm: commands_1.Perm.trusted,
        requirements: [commands_1.Req.mode('pvp')],
        init: function () {
            var data = { unpaused: false };
            Events.on(EventType.PlayEvent, function () {
                if (data.unpaused) {
                    data.unpaused = false;
                    Vars.state.rules.pvpAutoPause = true;
                }
            });
            return data;
        },
        handler: function (_a) {
            var data = _a.data, outputSuccess = _a.outputSuccess;
            Vars.state.rules.pvpAutoPause = false;
            data.unpaused = true;
            Core.app.post(function () { return Vars.state.set(GameState.State.playing); });
            outputSuccess("Unpaused.");
        },
    }), tp: {
        args: ['player:player'],
        description: 'Teleport to another player.',
        perm: commands_1.Perm.play,
        requirements: [commands_1.Req.modeNot("pvp")],
        handler: function (_a) {
            var _b, _c, _d;
            var args = _a.args, sender = _a.sender;
            if (!((_b = sender.unit()) === null || _b === void 0 ? void 0 : _b.spawnedByCore))
                (0, commands_1.fail)("Can only teleport while in a core unit.");
            if (sender.team() !== args.player.team())
                (0, commands_1.fail)("Cannot teleport to players on another team.");
            if ((_d = (_c = sender.unit()).hasPayload) === null || _d === void 0 ? void 0 : _d.call(_c))
                (0, commands_1.fail)("Cannot teleport to players while holding a payload.");
            (0, utils_1.teleportPlayer)(sender.player, args.player.player);
        },
    }, clean: {
        args: [],
        description: 'Removes all boulders from the map.',
        perm: commands_1.Perm.play,
        requirements: [commands_1.Req.cooldownGlobal(100000)],
        handler: function (_a) {
            var sender = _a.sender, outputSuccess = _a.outputSuccess;
            Timer.schedule(function () { return Call.sound(sender.con, Sounds.rockBreak, 1, 1, 0); }, 0, 0.05, 10);
            Vars.world.tiles.eachTile(function (t) {
                if (t.breakable() && t.block() instanceof Prop) {
                    t.removeNet();
                }
            });
            outputSuccess("Cleared the map of boulders.");
        }
    }, die: {
        args: [],
        description: 'Kills your unit.',
        perm: commands_1.Perm.mod.exceptModes({
            sandbox: commands_1.Perm.play
        }, "You do not have permission to die."),
        handler: function (_a) {
            var _b;
            var sender = _a.sender;
            (_b = sender.unit()) === null || _b === void 0 ? void 0 : _b.kill();
        },
    }, discord: {
        args: [],
        description: 'Takes you to our discord.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var sender = _a.sender;
            Call.openURI(sender.con, config_1.text.discordURL);
        },
    }, tilelog: {
        args: ['persist:boolean?'],
        description: 'Checks the history of a tile.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var args = _a.args, output = _a.output, outputSuccess = _a.outputSuccess, currentTapMode = _a.currentTapMode, handleTaps = _a.handleTaps;
            if (currentTapMode == "off") {
                if (args.persist) {
                    handleTaps("on");
                    outputSuccess("Tilelog mode enabled. Click tiles to check their recent history. Run /tilelog again to disable.");
                }
                else {
                    handleTaps("once");
                    output("Click on a tile to check its recent history...");
                }
            }
            else {
                handleTaps("off");
                outputSuccess("Tilelog disabled.");
            }
        },
        tapped: function (_a) {
            var _b;
            var tile = _a.tile, x = _a.x, y = _a.y, output = _a.output, sender = _a.sender, admins = _a.admins;
            var historyData = (_b = globals_1.tileHistory["".concat(x, ",").concat(y)]) !== null && _b !== void 0 ? _b : (0, commands_1.fail)("There is no recorded history for the selected tile (".concat(tile.x, ", ").concat(tile.y, ")."));
            var history = funcs_1.StringIO.read(historyData, function (str) { return str.readArray(function (d) { return ({
                action: d.readString(2),
                uuid: d.readString(3),
                time: d.readNumber(16),
                type: d.readString(2),
            }); }, 1); });
            output("[yellow]Tile history for tile (".concat(tile.x, ", ").concat(tile.y, "):\n") + history.map(function (e) {
                var _a, _b;
                return globals_1.uuidPattern.test(e.uuid)
                    ? (sender.hasPerm("viewUUIDs")
                        ? "[yellow]".concat((_a = admins.getInfoOptional(e.uuid)) === null || _a === void 0 ? void 0 : _a.plainLastName(), "[lightgray](").concat(e.uuid, ")[yellow] ").concat(e.action, " a [cyan]").concat(e.type, "[] ").concat((0, utils_1.formatTimeRelative)(e.time))
                        : "[yellow]".concat((_b = admins.getInfoOptional(e.uuid)) === null || _b === void 0 ? void 0 : _b.plainLastName(), " ").concat(e.action, " a [cyan]").concat(e.type, "[] ").concat((0, utils_1.formatTimeRelative)(e.time)))
                    : "[yellow]".concat(e.uuid, "[yellow] ").concat(e.action, " a [cyan]").concat(e.type, "[] ").concat((0, utils_1.formatTimeRelative)(e.time));
            }).join('\n'));
        }
    }, aoelog: (0, commands_1.command)(function () {
        var p1 = null;
        var p2 = null;
        var stage = 0;
        return {
            args: ['amount:number?'],
            description: 'tilelog, but aoe',
            perm: commands_1.Perm.none,
            handler: function (_a) {
                var args = _a.args, output = _a.output, outputSuccess = _a.outputSuccess, currentTapMode = _a.currentTapMode, handleTaps = _a.handleTaps;
                if (currentTapMode === "off") {
                    handleTaps("on");
                    outputSuccess("aoelog mode on");
                }
                else {
                    handleTaps("off");
                    outputSuccess("aoelog mode off");
                }
                p1 = null;
                p2 = null;
                stage = 0;
            },
            tapped: function (_a) {
                var tile = _a.tile, x = _a.x, y = _a.y, output = _a.output, sender = _a.sender, admins = _a.admins, handleTaps = _a.handleTaps;
                if (!p2 && p1) {
                    p2 = [x, y];
                    output("okie dokie registered 2nd point at ".concat(x, ", ").concat(y));
                }
                if (!p1 && p2) {
                    (0, commands_1.fail)("sorry dev has skillissue");
                }
                if (!p1) {
                    p1 = [x, y];
                    output("okie dokie 1st point registered at ".concat(x, ",").concat(y));
                }
                if (p2 && p1) {
                    stage = 3;
                    var sx = Math.abs(p1[0] - p2[0]);
                    var sy = Math.abs(p1[1] - p2[1]);
                    if (sx > 100 || sy > 100) {
                        (0, commands_1.fail)("sorry but your selection's too big");
                        handleTaps("off");
                    }
                    var minX = Math.min(p1[0], p2[0]);
                    var maxX = Math.max(p1[0], p2[0]);
                    var minY = Math.min(p1[1], p2[1]);
                    var maxY = Math.max(p1[1], p2[1]);
                    var tileData = [];
                    var _loop_1 = function (i) {
                        var _loop_2 = function (j) {
                            var pos = "".concat(i, ",").concat(j);
                            if (globals_1.tileHistory[pos]) {
                                var data = funcs_1.StringIO.read(globals_1.tileHistory[pos], function (str) {
                                    return str.readArray(function (d) {
                                        var _a, _b, _c;
                                        return ({
                                            action: (_a = d.readString(2)) !== null && _a !== void 0 ? _a : "??",
                                            uuid: (_b = d.readString(3)) !== null && _b !== void 0 ? _b : "??",
                                            time: d.readNumber(16),
                                            type: (_c = d.readString(2)) !== null && _c !== void 0 ? _c : "??",
                                        });
                                    }, 1);
                                });
                                data.forEach(function (entry) {
                                    var _a, _b;
                                    output("[yellow]Tile history for tile (".concat(i, ", ").concat(j, "): ") +
                                        (globals_1.uuidPattern.test(entry.uuid)
                                            ? (sender.hasPerm("viewUUIDs")
                                                ? "[yellow]".concat((_a = admins.getInfoOptional(entry.uuid)) === null || _a === void 0 ? void 0 : _a.plainLastName(), "[lightgray](").concat(entry.uuid, ")[yellow] ").concat(entry.action, " a [cyan]").concat(entry.type, "[] ").concat((0, utils_1.formatTimeRelative)(entry.time))
                                                : "[yellow]".concat((_b = admins.getInfoOptional(entry.uuid)) === null || _b === void 0 ? void 0 : _b.plainLastName(), " ").concat(entry.action, " a [cyan]").concat(entry.type, "[] ").concat((0, utils_1.formatTimeRelative)(entry.time)))
                                            : "[yellow]".concat(entry.uuid, "[yellow] ").concat(entry.action, " a [cyan]").concat(entry.type, "[] ").concat((0, utils_1.formatTimeRelative)(entry.time))));
                                });
                            }
                        };
                        for (var j = minY; j <= maxY; j++) {
                            _loop_2(j);
                        }
                    };
                    for (var i = minX; i <= maxX; i++) {
                        _loop_1(i);
                    }
                    p1 = null;
                    p2 = null;
                    handleTaps("off");
                }
                ;
            },
        };
    }), afk: {
        args: [],
        description: 'Toggles your afk status.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var sender = _a.sender, outputSuccess = _a.outputSuccess;
            sender.manualAfk = !sender.manualAfk;
            sender.updateName();
            if (sender.manualAfk)
                outputSuccess("You are now marked as AFK.");
            else
                outputSuccess("You are no longer marked as AFK.");
        },
    }, vanish: {
        args: ['target:player?'],
        description: "Toggles visibility of your rank and flags.",
        perm: commands_1.Perm.vanish,
        handler: function (_a) {
            var sender = _a.sender, _b = _a.args.target, target = _b === void 0 ? sender : _b, outputSuccess = _a.outputSuccess;
            if (sender.stelled())
                (0, commands_1.fail)("Marked players may not hide flags.");
            if (sender.muted)
                (0, commands_1.fail)("Muted players may not hide flags.");
            if (sender != target && target.hasPerm("blockTrolling"))
                (0, commands_1.fail)("Target is insufficentlly trollable.");
            if (sender != target && !sender.ranksAtLeast("mod"))
                (0, commands_1.fail)("You do not have permission to vanish other players.");
            target.showRankPrefix = !target.showRankPrefix;
            outputSuccess("".concat(target == sender ? "Your" : "".concat(target.name, "'s"), " rank prefix is now ").concat(target.showRankPrefix ? "visible" : "hidden", "."));
        },
    }, tileid: {
        args: [],
        description: 'Checks id of a tile.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var output = _a.output, handleTaps = _a.handleTaps;
            handleTaps("once");
            output("Click a tile to see its id...");
        },
        tapped: function (_a) {
            var output = _a.output, f = _a.f, tile = _a.tile;
            output(f(templateObject_1 || (templateObject_1 = __makeTemplateObject(["ID is ", ""], ["ID is ", ""])), tile.block().id));
        }
    } }, Object.fromEntries(config_1.FishServer.all.map(function (server) { return [
    server.name,
    {
        args: [],
        description: "Switches to the ".concat(server.name, " server."),
        perm: server.requiredPerm ? commands_1.Perm.getByName(server.requiredPerm) : commands_1.Perm.none,
        isHidden: true,
        handler: function (_a) {
            var sender = _a.sender;
            players_1.FishPlayer.messageAllWithPerm(server.requiredPerm, "".concat(sender.name, "[magenta] has gone to the ").concat(server.name, " server. Use [cyan]/").concat(server.name, " [magenta]to join them!"));
            Call.connect(sender.con, server.ip, server.port);
        },
    },
]; }))), { switch: {
        args: ["server:string", "target:player?"],
        description: "Switches to another server.",
        perm: commands_1.Perm.play,
        handler: function (_a) {
            var _b, _c;
            var args = _a.args, sender = _a.sender, f = _a.f;
            if (args.target != null && args.target != sender && !sender.canModerate(args.target, true, "admin", true))
                (0, commands_1.fail)(f(templateObject_2 || (templateObject_2 = __makeTemplateObject(["You do not have permission to switch player ", "."], ["You do not have permission to switch player ", "."])), args.target));
            var target = (_b = args.target) !== null && _b !== void 0 ? _b : sender;
            if (globals_1.ipPortPattern.test(args.server) && sender.hasPerm("admin")) {
                //direct connect
                Call.connect.apply(Call, __spreadArray([target.con], __read(args.server.split(":")), false));
            }
            else {
                var unknownServerMessage = "Unknown server ".concat(args.server, ". Valid options: ").concat(config_1.FishServer.all.filter(function (s) { return !s.requiredPerm || sender.hasPerm(s.requiredPerm); }).map(function (s) { return s.name; }).join(", "));
                var server = (_c = config_1.FishServer.byName(args.server)) !== null && _c !== void 0 ? _c : (0, commands_1.fail)(unknownServerMessage);
                //Pretend the server doesn't exist
                if (server.requiredPerm && !sender.hasPerm(server.requiredPerm))
                    (0, commands_1.fail)(unknownServerMessage);
                if (target == sender)
                    players_1.FishPlayer.messageAllWithPerm(server.requiredPerm, "".concat(sender.name, "[magenta] has gone to the ").concat(server.name, " server. Use [cyan]/").concat(server.name, " [magenta]to join them!"));
                Call.connect(target.con, server.ip, server.port);
            }
        }
    }, s: {
        args: ['message:string'],
        description: "Sends a message to staff only.",
        perm: commands_1.Perm.chat,
        handler: function (_a) {
            var sender = _a.sender, args = _a.args, outputSuccess = _a.outputSuccess, outputFail = _a.outputFail, lastUsedSender = _a.lastUsedSender;
            if (!sender.hasPerm("mod")) {
                if (Date.now() - lastUsedSender < 4000)
                    (0, commands_1.fail)("This command was used recently and is on cooldown. [orange]Misuse of this command may result in a mute.");
            }
            api.sendStaffMessage(args.message, sender.name, function (sent) {
                if (!sender.hasPerm("mod")) {
                    if (sent) {
                        outputSuccess("Message sent to [orange]all online staff.");
                    }
                    else {
                        var wasReceived = players_1.FishPlayer.messageStaff(sender.prefixedName, args.message);
                        if (wasReceived)
                            outputSuccess("Message sent to staff.");
                        else
                            outputFail("No staff were online to receive your message.");
                    }
                }
            });
        },
    }, 
    /**
     * This command is mostly for mobile (or players without foos).
     *
     * Since the player's unit follows the camera and we are moving the
     * camera, we need to keep setting the players real position to the
     * spot the command was made. This is pretty buggy but otherwise the
     * player will be up the target player's butt
     */
    watch: {
        args: ['player:player?'],
        description: "Watch/unwatch a player.",
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var _b, _c;
            var args = _a.args, sender = _a.sender, outputSuccess = _a.outputSuccess, outputFail = _a.outputFail;
            if (sender.watch) {
                outputSuccess("No longer watching a player.");
                sender.watch = false;
            }
            else if (args.player) {
                sender.watch = true;
                var stayX_1 = (_b = sender.unit()) === null || _b === void 0 ? void 0 : _b.x;
                var stayY_1 = (_c = sender.unit()) === null || _c === void 0 ? void 0 : _c.y;
                var target_1 = args.player.player;
                var watch_1 = function () {
                    var _a, _b;
                    if (sender.watch && target_1.unit()) {
                        // Self.X+(172.5-Self.X)/10
                        Call.setCameraPosition(sender.con, target_1.unit().x, target_1.unit().y);
                        (_b = (_a = sender.unit()) === null || _a === void 0 ? void 0 : _a.set) === null || _b === void 0 ? void 0 : _b.call(_a, stayX_1, stayY_1);
                        Timer.schedule(function () { return watch_1(); }, 0.1, 0.1, 0);
                    }
                    else {
                        Call.setCameraPosition(sender.con, stayX_1, stayY_1);
                    }
                };
                watch_1();
            }
            else {
                outputFail("No player to unwatch.");
            }
        },
    }, spectate: (0, commands_1.command)(function () {
        //TODO revise code
        /** Mapping between player and original team */
        var spectators = new Map();
        function spectate(target) {
            spectators.set(target, target.team());
            target.forceRespawn();
            target.setTeam(Team.derelict);
            target.forceRespawn();
        }
        function resume(target) {
            if (spectators.get(target) == null)
                return; // this state is possible for a person who left not in spectate
            target.setTeam(spectators.get(target));
            spectators.delete(target);
            target.forceRespawn();
        }
        Events.on(EventType.GameOverEvent, function () { return spectators.clear(); });
        Events.on(EventType.PlayerLeave, function (_a) {
            var player = _a.player;
            return resume(players_1.FishPlayer.get(player));
        });
        return {
            args: ["target:player?"],
            description: "Toggles spectator mode in PVP games.",
            perm: commands_1.Perm.play,
            handler: function (_a) {
                var sender = _a.sender, _b = _a.args.target, target = _b === void 0 ? sender : _b, outputSuccess = _a.outputSuccess, f = _a.f;
                if (!config_1.Gamemode.pvp() && !sender.hasPerm("mod"))
                    (0, commands_1.fail)("You do not have permission to spectate on a non-pvp server.");
                if (target !== sender && target.hasPerm("blockTrolling"))
                    (0, commands_1.fail)("Target player is insufficiently trollable.");
                if (target !== sender && !sender.ranksAtLeast("admin"))
                    (0, commands_1.fail)("You do not have permission to force other players to spectate.");
                if (spectators.has(target)) {
                    resume(target);
                    outputSuccess(target == sender
                        ? f(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Rejoining game as team ", "."], ["Rejoining game as team ", "."])), target.team()) : f(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Forced ", " out of spectator mode."], ["Forced ", " out of spectator mode."])), target));
                }
                else {
                    spectate(target);
                    outputSuccess(target == sender
                        ? f(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Now spectating. Run /spectate again to resume gameplay."], ["Now spectating. Run /spectate again to resume gameplay."]))) : f(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Forced ", " into spectator mode."], ["Forced ", " into spectator mode."])), target));
                }
            }
        };
    }), help: {
        args: ['name:string?'],
        description: 'Displays a list of all commands.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var _b;
            var args = _a.args, output = _a.output, sender = _a.sender, allCommands = _a.allCommands;
            var formatCommand = function (name, color) {
                return new funcs_1.StringBuilder()
                    .add("".concat(color, "/").concat(name))
                    .chunk("[white]".concat(allCommands[name].args.map(commands_1.formatArg).join(' ')))
                    .chunk("[lightgray]- ".concat(allCommands[name].description)).str;
            };
            var formatList = function (commandList, color) { return commandList.map(function (c) { return formatCommand(c, color); }).join('\n'); };
            if (args.name && isNaN(parseInt(args.name)) && !['mod', 'admin', 'member'].includes(args.name)) {
                //name is not a number or a category, therefore it is probably a command name
                if (args.name in allCommands && (!allCommands[args.name].isHidden || allCommands[args.name].perm.check(sender))) {
                    output("Help for command ".concat(args.name, ":\n\t").concat(allCommands[args.name].description, "\n\tUsage: [sky]/").concat(args.name, " [white]").concat(allCommands[args.name].args.map(commands_1.formatArg).join(' '), "\n\tPermission required: ").concat(allCommands[args.name].perm.name));
                }
                else
                    (0, commands_1.fail)("Command \"".concat(args.name, "\" does not exist."));
            }
            else {
                var commands_2 = {
                    player: [],
                    mod: [],
                    admin: [],
                    member: [],
                };
                //TODO change this to category, not perm
                Object.entries(allCommands).forEach(function (_a) {
                    var _b = __read(_a, 2), name = _b[0], data = _b[1];
                    return (data.perm === commands_1.Perm.admin ? commands_2.admin : data.perm === commands_1.Perm.mod ? commands_2.mod : data.perm === commands_1.Perm.member ? commands_2.member : commands_2.player).push(name);
                });
                var chunkedPlayerCommands = (0, funcs_1.to2DArray)(commands_2.player, 15);
                switch (args.name) {
                    case 'admin':
                        output("".concat(commands_1.Perm.admin.color, "-- Admin commands --\n") + formatList(commands_2.admin, commands_1.Perm.admin.color));
                        break;
                    case 'mod':
                        output("".concat(commands_1.Perm.mod.color, "-- Mod commands --\n") + formatList(commands_2.mod, commands_1.Perm.mod.color));
                        break;
                    case 'member':
                        output("".concat(commands_1.Perm.member.color, "-- Member commands --\n") + formatList(commands_2.member, commands_1.Perm.member.color));
                        break;
                    default:
                        var pageNumber = args.name != undefined ? parseInt(args.name) : 1;
                        var page = (_b = chunkedPlayerCommands[pageNumber - 1]) !== null && _b !== void 0 ? _b : (0, commands_1.fail)("\"".concat(args.name, "\" is an invalid page number."));
                        output("[sky]-- Commands page [lightgrey]".concat(pageNumber, "/").concat(chunkedPlayerCommands.length, "[sky] --\n") + formatList(page, '[sky]'));
                }
            }
        },
    }, msg: {
        args: ['player:player', 'message:string'],
        description: 'Send a message to only one player.',
        perm: commands_1.Perm.chat,
        handler: function (_a) {
            var args = _a.args, sender = _a.sender, output = _a.output, f = _a.f;
            globals_1.recentWhispers[args.player.uuid] = sender.uuid;
            args.player.sendMessage("".concat(sender.prefixedName, "[lightgray] whispered:[#BBBBBB] ").concat(args.message));
            output(f(templateObject_7 || (templateObject_7 = __makeTemplateObject(["[lightgray]Whispered to ", "[lightgray]:[#BBBBBB] ", ""], ["[lightgray]Whispered to ", "[lightgray]:[#BBBBBB] ", ""])), args.player, args.message));
        },
    }, r: {
        args: ['message:string'],
        description: 'Reply to the most recent message.',
        perm: commands_1.Perm.chat,
        handler: function (_a) {
            var _b;
            var args = _a.args, sender = _a.sender, output = _a.output, f = _a.f;
            var recipient = players_1.FishPlayer.getById((_b = globals_1.recentWhispers[sender.uuid]) !== null && _b !== void 0 ? _b : (0, commands_1.fail)("It doesn't look like someone has messaged you recently. Try whispering to them with [white]\"/msg <player> <message>\""));
            if (!(recipient === null || recipient === void 0 ? void 0 : recipient.connected()))
                (0, commands_1.fail)("The person who last messaged you doesn't seem to exist anymore. Try whispering to someone with [white]\"/msg <player> <message>\"");
            globals_1.recentWhispers[globals_1.recentWhispers[sender.uuid]] = sender.uuid;
            recipient.sendMessage("".concat(sender.name, "[lightgray] whispered:[#BBBBBB] ").concat(args.message));
            output(f(templateObject_8 || (templateObject_8 = __makeTemplateObject(["[lightgray]Whispered to ", "[lightgray]:[#BBBBBB] ", ""], ["[lightgray]Whispered to ", "[lightgray]:[#BBBBBB] ", ""])), recipient, args.message));
        },
    }, trail: {
        args: ['type:string?', 'color:string?'],
        description: 'Use command to see options and toggle trail on/off.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var args = _a.args, sender = _a.sender, output = _a.output, outputFail = _a.outputFail, outputSuccess = _a.outputSuccess;
            //overload 1: type not specified
            if (!args.type) {
                if (sender.trail != null) {
                    sender.trail = null;
                    outputSuccess("Trail turned off.");
                }
                else {
                    output("Available types:[yellow]\n1 - fluxVapor (flowing smoke, long lasting)\n2 - overclocked (diamonds)\n3 - overdriven (squares)\n4 - shieldBreak (smol)\n5 - upgradeCoreBloom (square, long lasting, only orange)\n6 - electrified (tiny spiratic diamonds, but only green)\n7 - unitDust (same as above but round, and can change colors)\n[white]Usage: [orange]/trail [lightgrey]<type> [color/#hex/r,g,b]");
                }
                return;
            }
            //overload 2: type specified
            var trailTypes = {
                "1": 'fluxVapor',
                "2": 'overclocked',
                "3": 'overdriven',
                "4": 'shieldBreak',
                "5": 'upgradeCoreBloom',
                "6": 'electrified',
                "7": 'unitDust',
            };
            var selectedType = trailTypes[args.type];
            if (!selectedType) {
                if (Object.values(trailTypes).includes(args.type))
                    (0, commands_1.fail)("Please use the numeric id to refer to a trail type.");
                else
                    (0, commands_1.fail)("\"".concat(args.type, "\" is not an available type."));
            }
            var color = args.color ? (0, utils_1.getColor)(args.color) : Color.white;
            if (color instanceof Color) {
                sender.trail = {
                    type: selectedType,
                    color: color,
                };
            }
            else {
                outputFail("[scarlet]Sorry, \"".concat(args.color, "\" is not a valid color.\n[yellow]Color can be in the following formats:\n[pink]pink [white]| [gray]#696969 [white]| 255,0,0."));
            }
        },
    }, ohno: (0, commands_1.command)({
        args: [],
        description: 'Spawns an ohno.',
        perm: commands_1.Perm.play,
        init: function () {
            var Ohnos = {
                enabled: true,
                ohnos: new Array(),
                makeOhno: function (team, x, y) {
                    var ohno = UnitTypes.atrax.create(team);
                    ohno.set(x, y);
                    ohno.type = UnitTypes.alpha;
                    ohno.apply(StatusEffects.disarmed, Number.MAX_SAFE_INTEGER);
                    ohno.resetController(); //does this work?
                    ohno.add();
                    this.ohnos.push(ohno);
                    return ohno;
                },
                updateLength: function () {
                    this.ohnos = this.ohnos.filter(function (o) { return o && o.isAdded() && !o.dead; });
                },
                killAll: function () {
                    this.ohnos.forEach(function (ohno) { var _a; return (_a = ohno === null || ohno === void 0 ? void 0 : ohno.kill) === null || _a === void 0 ? void 0 : _a.call(ohno); });
                    this.ohnos = [];
                },
                amount: function () {
                    return this.ohnos.length;
                },
            };
            Events.on(EventType.GameOverEvent, function (e) {
                Ohnos.killAll();
            });
            return Ohnos;
        },
        requirements: [
            commands_1.Req.gameRunning, commands_1.Req.modeNot("pvp"),
            commands_1.Req.unitExists("You cannot spawn ohnos while dead.")
        ],
        handler: function (_a) {
            var sender = _a.sender, Ohnos = _a.data;
            if (!Ohnos.enabled)
                (0, commands_1.fail)("Ohnos have been temporarily disabled.");
            Ohnos.updateLength();
            if (Ohnos.ohnos.length >= (Groups.player.size() + 1) ||
                sender.team().data().countType(UnitTypes.alpha) >= Units.getCap(sender.team()))
                (0, commands_1.fail)("Sorry, the max number of ohno units has been reached.");
            if ((0, utils_1.nearbyEnemyTile)((sender.unit()), 6) != null)
                (0, commands_1.fail)("Too close to an enemy building!");
            if (!UnitTypes.alpha.supportsEnv(Vars.state.rules.env))
                (0, commands_1.fail)("Ohnos cannot survive in this map.");
            Ohnos.makeOhno(sender.team(), sender.player.x, sender.player.y);
        },
    }), ranks: {
        args: [],
        description: 'Displays information about all ranks.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var output = _a.output;
            output("List of ranks:\n" +
                Object.values(ranks_1.Rank.ranks)
                    .map(function (rank) { return "".concat(rank.prefix, " ").concat(rank.color).concat((0, funcs_1.capitalizeText)(rank.name), "[]: ").concat(rank.color).concat(rank.description, "[]\n"); })
                    .join("") +
                "List of flags:\n" +
                Object.values(ranks_1.RoleFlag.flags)
                    .map(function (flag) { return "".concat(flag.prefix, " ").concat(flag.color).concat((0, funcs_1.capitalizeText)(flag.name), "[]: ").concat(flag.color).concat(flag.description, "[]\n"); })
                    .join(""));
        },
    }, rules: {
        args: ['player:player?'],
        description: 'Displays the server rules.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var _b;
            var args = _a.args, sender = _a.sender, outputSuccess = _a.outputSuccess, f = _a.f;
            var target = (_b = args.player) !== null && _b !== void 0 ? _b : sender;
            if (target !== sender) {
                if (!sender.hasPerm("warn"))
                    (0, commands_1.fail)("You do not have permission to show rules to other players.");
                if (target.hasPerm("blockTrolling"))
                    (0, commands_1.fail)(f(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Player ", " is insufficiently trollable."], ["Player ", " is insufficiently trollable."])), args.player));
            }
            menus_1.Menu.menu("Rules for [#0000ff]>|||> FISH [white]servers", config_1.rules.join("\n\n"), ["[green]I agree to abide by these rules[]", "No"], target).then(function (option) {
                if (option == "No") {
                    target.kick("You must agree to the rules to play on this server. Rejoin to agree to the rules.", 1);
                    outputSuccess('Player rejected the rules and was kicked.');
                }
                else {
                    outputSuccess('Player acknowledged the rules.');
                }
            });
            if (target !== sender)
                outputSuccess(f(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Reminded ", " of the rules."], ["Reminded ", " of the rules."])), target));
        },
    }, void: {
        args: ["player:player?"],
        description: 'Warns other players about power voids.',
        perm: commands_1.Perm.play,
        requirements: [commands_1.Req.mode("attack")],
        handler: function (_a) {
            var args = _a.args, sender = _a.sender, lastUsedSuccessfullySender = _a.lastUsedSuccessfullySender, lastUsedSuccessfully = _a.lastUsedSuccessfully, outputSuccess = _a.outputSuccess, f = _a.f;
            if (args.player) {
                if (Date.now() - lastUsedSuccessfullySender < 20000)
                    (0, commands_1.fail)("This command was used recently and is on cooldown.");
                if (!sender.hasPerm("trusted"))
                    (0, commands_1.fail)("You do not have permission to show popups to other players, please run /void with no arguments to send a chat message to everyone.");
                if (args.player !== sender && args.player.hasPerm("blockTrolling"))
                    (0, commands_1.fail)("Target player is insufficiently trollable.");
                menus_1.Menu.menu("\uf83f [scarlet]WARNING[] \uf83f", "[white]Don't break the Power Void (\uF83F), it's a trap!\nPower voids disable anything they are connected to.\nIf you break it, [scarlet]you will get attacked[] by enemy units.\nPlease stop attacking and [lime]build defenses[] first!", ["I understand"], args.player, { onCancel: 'null' }).then(function () { return outputSuccess(f(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Player ", " acknowledged the warning."], ["Player ", " acknowledged the warning."])), args.player)); });
                (0, utils_1.logAction)("showed void warning", sender, args.player);
                outputSuccess(f(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Warned ", " about power voids with a popup message."], ["Warned ", " about power voids with a popup message."])), args.player));
            }
            else {
                if (Date.now() - lastUsedSuccessfully < 10000)
                    (0, commands_1.fail)("This command was used recently and is on cooldown.");
                Call.sendMessage("[white]Don't break the Power Void (\uF83F), it's a trap!\nPower voids disable anything they are connected to. If you break it, [scarlet]you will get attacked[] by enemy units.\nPlease stop attacking and [lime]build defenses[] first!");
            }
        },
    }, team: {
        args: ['team:team', 'reason:string?'],
        description: 'Changes your team.',
        perm: commands_1.Perm.changeTeam,
        handler: function (_a) {
            var _b;
            var sender = _a.sender, _c = _a.args, team = _c.team, reason = _c.reason, outputSuccess = _a.outputSuccess, f = _a.f;
            if (config_1.Gamemode.sandbox() && globals_1.fishState.peacefulMode && !sender.hasPerm("admin"))
                (0, commands_1.fail)("You do not have permission to change teams because peaceful mode is on.");
            if (config_1.Gamemode.sandbox() && team === Vars.state.rules.waveTeam && !sender.hasPerm("admin"))
                (0, commands_1.fail)("You do not have permission to change to the wave team on sandbox.");
            if (!config_1.Gamemode.sandbox() && !sender.hasPerm("mod") && !reason)
                (0, commands_1.fail)("Please specify a reason for changing teams.");
            if (!sender.hasPerm("changeTeamExternal")) {
                if (team.data().cores.size <= 0)
                    (0, commands_1.fail)("You do not have permission to change to a team with no cores.");
                if (!sender.player.dead() && !((_b = sender.unit()) === null || _b === void 0 ? void 0 : _b.spawnedByCore))
                    sender.forceRespawn();
            }
            if (!sender.hasPerm("mod"))
                sender.changedTeam = true;
            sender.setTeam(team);
            outputSuccess(f(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Changed your team to ", "."], ["Changed your team to ", "."])), team));
            if (reason)
                (0, utils_1.logAction)("changed team to ".concat(team.name, " on ").concat((0, funcs_1.escapeTextDiscord)(Vars.state.map.plainName()), " with reason ").concat((0, funcs_1.escapeTextDiscord)(reason)), sender);
        },
    }, teamp: {
        args: ['team:team', 'target:player'],
        description: 'Changes the team of a player.',
        perm: commands_1.Perm.changeTeam,
        handler: function (_a) {
            var _b;
            var sender = _a.sender, _c = _a.args, team = _c.team, target = _c.target, outputSuccess = _a.outputSuccess, f = _a.f;
            if (!sender.canModerate(target, true, "mod", true))
                (0, commands_1.fail)(f(templateObject_14 || (templateObject_14 = __makeTemplateObject(["You do not have permission to change the team of ", ""], ["You do not have permission to change the team of ", ""])), target));
            if (config_1.Gamemode.sandbox() && globals_1.fishState.peacefulMode && !sender.hasPerm("admin"))
                (0, commands_1.fail)("You do not have permission to change teams because peaceful mode is on.");
            if (!sender.hasPerm("changeTeamExternal")) {
                if (team.data().cores.size <= 0)
                    (0, commands_1.fail)("You do not have permission to change to a team with no cores.");
                if (!target.player.dead() && !((_b = target.unit()) === null || _b === void 0 ? void 0 : _b.spawnedByCore))
                    target.forceRespawn();
            }
            target.setTeam(team);
            outputSuccess(f(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Changed team of player ", " to ", "."], ["Changed team of player ", " to ", "."])), target, team));
        },
    }, rank: {
        args: ['player:player'],
        description: 'Displays the rank of a player.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var args = _a.args, output = _a.output, f = _a.f;
            output(f(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Player ", "'s rank is ", "."], ["Player ", "'s rank is ", "."])), args.player, args.player.rank));
        },
    }, forcevnw: {
        args: ["force:boolean?"],
        description: 'Force skip to the next wave.',
        perm: commands_1.Perm.admin,
        handler: function (_a) {
            var allCommands = _a.allCommands, sender = _a.sender, _b = _a.args.force, force = _b === void 0 ? true : _b;
            if (allCommands.vnw.data.manager.session == null) {
                if (force == false)
                    (0, commands_1.fail)("Cannot clear votes for VNW because no vote is currently ongoing.");
                (0, utils_1.skipWaves)(1, true);
            }
            else {
                if (force)
                    Call.sendMessage("VNW: [green]Vote was forced by admin [yellow]".concat(sender.name, "[green], skipping wave."));
                else
                    Call.sendMessage("VNW: [red]Votes cleared by admin [yellow]".concat(sender.name, "[red]."));
                allCommands.vnw.data.manager.forceVote(force);
            }
        },
    }, vnw: (0, commands_1.command)({
        args: [],
        description: "Vote to start the next wave.",
        perm: commands_1.Perm.play,
        init: function () { return ({
            manager: new votes_1.VoteManager(1.5 * 60000)
                .on("success", function (t) { return (0, utils_1.skipWaves)(t.session.data, true); })
                .on("vote passed", function () { return Call.sendMessage('VNW: [green]Vote passed, skipping to next wave.'); })
                .on("vote failed", function () { return Call.sendMessage('VNW: [red]Vote failed.'); })
                .on("player vote change", function (t, player) { return Call.sendMessage("VNW: ".concat(player.name, " [white] has voted on skipping [accent]").concat(t.session.data, "[white] wave(s). [green]").concat(t.currentVotes(), "[white] votes, [green]").concat(t.requiredVotes(), "[white] required.")); })
                .on("player vote removed", function (t, player) { return Call.sendMessage("VNW: ".concat(player.name, " [white] has left. [green]").concat(t.currentVotes(), "[white] votes, [green]").concat(t.requiredVotes(), "[white] required.")); })
        }); },
        requirements: [commands_1.Req.cooldown(3000), commands_1.Req.mode("survival"), commands_1.Req.gameRunning],
        handler: function (_a) {
            return __awaiter(this, arguments, void 0, function (_b) {
                var option;
                var sender = _b.sender, manager = _b.data.manager;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!manager.session) return [3 /*break*/, 2];
                            return [4 /*yield*/, menus_1.Menu.menu("Start a Next Wave Vote", "Select the amount of waves you would like to skip.", [1, 5, 10], sender, {
                                    includeCancel: true,
                                    optionStringifier: function (n) { return "".concat(n, " waves"); }
                                })];
                        case 1:
                            option = _c.sent();
                            if (manager.session) {
                                //Someone else started a vote
                                if (manager.session.data != option)
                                    (0, commands_1.fail)("Someone else started a vote with a different number of waves to skip.");
                                else
                                    manager.vote(sender, sender.voteWeight(), option);
                            }
                            else {
                                manager.start(sender, sender.voteWeight(), option);
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            manager.vote(sender, sender.voteWeight(), null);
                            _c.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    }), forcertv: {
        args: ["force:boolean?"],
        description: 'Force skip to the next map.',
        perm: commands_1.Perm.admin,
        handler: function (_a) {
            var _b = _a.args.force, force = _b === void 0 ? true : _b, sender = _a.sender, allCommands = _a.allCommands;
            if (allCommands.rtv.data.manager.session == null) {
                if (force == false)
                    (0, commands_1.fail)("Cannot clear votes for RTV because no vote is currently ongoing.");
                allCommands.rtv.data.manager.forceVote(true);
            }
            else {
                if (force)
                    Call.sendMessage("RTV: [green]Vote was forced by admin [yellow]".concat(sender.name, "[green]."));
                else
                    Call.sendMessage("RTV: [red]Votes cleared by admin [yellow]".concat(sender.name, "[red]."));
                allCommands.rtv.data.manager.forceVote(force);
            }
        }
    }, rtv: (0, commands_1.command)({
        args: [],
        description: 'Rock the vote to change map.',
        perm: commands_1.Perm.play,
        init: function () { return ({
            manager: new votes_1.VoteManager(1.5 * 60000, config_1.Gamemode.hexed() ? ["fractionOfVoters", 1] : undefined) //Require unanimity in Hexed, as it is often 1 v everyone
                .on("success", function () { return (0, utils_1.neutralGameover)(); })
                .on("vote passed", function () { return Call.sendMessage("RTV: [green]Vote has passed, changing map."); })
                .on("vote failed", function () { return Call.sendMessage("RTV: [red]Vote failed."); })
                .on("player vote change", function (t, player, oldVote, newVote) { return Call.sendMessage("RTV: ".concat(player.name, "[white] ").concat(oldVote == newVote ? "still " : "", "wants to change the map. [green]").concat(t.currentVotes(), "[white] votes, [green]").concat(t.requiredVotes(), "[white] required.")); })
                .on("player vote removed", function (t, player) { return Call.sendMessage("RTV: ".concat(player.name, "[white] has left the game. [green]").concat(t.currentVotes(), "[white] votes, [green]").concat(t.requiredVotes(), "[white] required.")); })
        }); },
        requirements: [commands_1.Req.cooldown(3000), commands_1.Req.gameRunning],
        handler: function (_a) {
            var sender = _a.sender, manager = _a.data.manager;
            manager.vote(sender, 1, 0); //No weighting for RTV except for removing AFK players
        }
    }), 
    // votekick: {
    //	 args: ["target:player"],
    //	 description: "Starts a vote to kick a player.",
    //	 perm: Perm.play,
    //	 handler({args, sender}){
    // 		if(votekickmanager.currentSession) fail(`There is already a votekick in progress.`);
    // 		votekickmanager.start({
    // 			initiator: sender,
    // 			target: args.player
    // 		});
    //	 }
    // },
    // vote: {
    //	 args: ["vote:boolean"],
    //	 description: "Use /votekick instead.",
    //	 perm: Perm.play,
    //	 handler({sender, args}){
    // 		votekickmanager.handleVote(sender, args ? 1 : -1);
    //	 }
    // },
    forcenextmap: {
        args: ["map:map"],
        description: 'Override the next map in queue.',
        perm: commands_1.Perm.admin.exceptModes({
            testsrv: commands_1.Perm.play
        }),
        handler: function (_a) {
            var allCommands = _a.allCommands, args = _a.args, sender = _a.sender, outputSuccess = _a.outputSuccess, f = _a.f;
            Vars.maps.setNextMapOverride(args.map);
            if (allCommands.nextmap.data.voteEndTime() > -1) {
                //Cancel /nextmap vote if it's ongoing
                allCommands.nextmap.data.resetVotes();
                Call.sendMessage("[red]Admin ".concat(sender.name, "[red] has cancelled the vote. The next map will be [yellow]").concat(args.map.name(), "."));
            }
            else {
                outputSuccess(f(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Forced the next map to be \"", "\" by ", ""], ["Forced the next map to be \"", "\" by ", ""])), args.map.name(), args.map.author()));
            }
        },
    }, maps: {
        args: [],
        description: 'Lists the available maps.',
        perm: commands_1.Perm.none,
        handler: function (_a) {
            var output = _a.output;
            output("[yellow]Use [white]/nextmap [lightgray]<map name> [yellow]to vote on a map.\n\n[blue]Available maps:\n_________________________\n".concat(Vars.maps.customMaps().toArray().map(function (map) {
                return "[yellow]".concat(map.name());
            }).join("\n")));
        }
    }, nextmap: (0, commands_1.command)(function () {
        var votes = new Map();
        var lastVoteCount = 0;
        var lastVoteTime = 0;
        var voteEndTime = -1;
        var voteDuration = 1.5 * 60000; // 1.5 mins
        var task = null;
        function resetVotes() {
            votes.clear();
            voteEndTime = -1;
            task === null || task === void 0 ? void 0 : task.cancel();
        }
        function getMapData() {
            return __spreadArray([], __read(votes.values()), false).reduce(function (acc, map) { return (acc.increment(map), acc); }, new ObjectIntMap()).entries().toArray();
        }
        function showVotes() {
            Call.sendMessage("[green]Current votes:\n------------------------------\n".concat(getMapData().map(function (_a) {
                var map = _a.key, votes = _a.value;
                return "[cyan]".concat(map.name(), "[yellow]: ").concat(votes);
            }).toString("\n")));
        }
        function startVote() {
            voteEndTime = Date.now() + voteDuration;
            task = Timer.schedule(endVote, voteDuration / 1000);
        }
        function endVote() {
            if (voteEndTime == -1)
                return; //aborted somehow
            if (votes.size == 0)
                return; //no votes?
            if (votes.size + 2 <= lastVoteCount && (Date.now() - lastVoteTime) < 600000) {
                //If the number of votes is 2 less than the previous number of votes for a vote in the past 10 minutes, abor
                Call.sendMessage("[cyan]Next Map Vote: [scarlet]Vote aborted because a previous vote had significantly higher turnout");
                resetVotes();
                return;
            }
            else {
                lastVoteTime = Date.now();
                lastVoteCount = votes.size;
            }
            var mapData = getMapData();
            var highestVoteCount = mapData.max(floatf(function (e) { return e.value; })).value;
            var highestVotedMaps = mapData.select(function (e) { return e.value == highestVoteCount; });
            var winner;
            if (highestVotedMaps.size > 1) {
                winner = highestVotedMaps.random().key;
                Call.sendMessage("[green]There was a tie between the following maps:\n".concat(highestVotedMaps.map(function (_a) {
                    var map = _a.key, votes = _a.value;
                    return "[cyan]".concat(map.name(), "[yellow]: ").concat(votes);
                }).toString("\n"), "\n[green]Picking random winner: [yellow]").concat(winner.name()));
            }
            else {
                winner = highestVotedMaps.get(0).key;
                Call.sendMessage("[green]Map voting complete! The next map will be [yellow]".concat(winner.name(), " [green]with [yellow]").concat(highestVoteCount, "[green] votes."));
            }
            Vars.maps.setNextMapOverride(winner);
            resetVotes();
        }
        Events.on(EventType.GameOverEvent, resetVotes);
        Events.on(EventType.ServerLoadEvent, resetVotes);
        return {
            args: ['map:map'],
            description: 'Allows you to vote for the next map. Use /maps to see all available maps.',
            perm: commands_1.Perm.play,
            data: { votes: votes, voteEndTime: function () { return voteEndTime; }, resetVotes: resetVotes, endVote: endVote },
            requirements: [commands_1.Req.cooldown(10000)],
            handler: function (_a) {
                var map = _a.args.map, sender = _a.sender;
                if (config_1.Gamemode.testsrv())
                    (0, commands_1.fail)("Please use /forcenextmap instead.");
                if (votes.get(sender))
                    (0, commands_1.fail)("You have already voted.");
                votes.set(sender, map);
                if (voteEndTime == -1) {
                    if ((Date.now() - lastVoteTime) < 60000)
                        (0, commands_1.fail)("Please wait 1 minute before starting a new map vote.");
                    startVote();
                    Call.sendMessage("[cyan]Next Map Vote: ".concat(sender.name, "[cyan] started a map vote, and voted for [yellow]").concat(map.name(), "[cyan]. Use [white]/nextmap ").concat(map.plainName(), "[] to add your vote, or run [white]/maps[] to see other available maps."));
                }
                else {
                    Call.sendMessage("[cyan]Next Map Vote: ".concat(sender.name, "[cyan] voted for [yellow]").concat(map.name(), "[cyan]. Time left: [scarlet]").concat((0, utils_1.formatTimeRelative)(voteEndTime, true)));
                    showVotes();
                }
            }
        };
    }), surrender: (0, commands_1.command)(function () {
        var prefix = "[orange]Surrender[white]: ";
        var managers = Team.all.map(function (team) {
            return new votes_1.VoteManager(1.5 * 60000, ["fractionOfVoters", config_1.Gamemode.hexed() ? 1 : 3 / 4], function (p) { return p.team() == team && !p.afk(); })
                .on("success", function () { return team.cores().copy().each(function (c) { return c.kill(); }); })
                .on("vote passed", function () { return Call.sendMessage(prefix + "Team ".concat(team.coloredName(), " has voted to forfeit this match.")); })
                .on("vote failed", function (t) { return t.messageEligibleVoters(prefix + "Team ".concat(team.coloredName(), " has chosen not to forfeit this match.")); })
                .on("player vote change", function (t, player, oldVote, newVote) { return t.messageEligibleVoters(prefix + "".concat(player.name, "[white] ").concat(oldVote == newVote ? "still " : "", "wants to forfeit this match. [orange]").concat(t.currentVotes(), "[white] votes, [orange]").concat(t.requiredVotes(), "[white] required.")); })
                .on("player vote removed", function (t, player) { return t.messageEligibleVoters(prefix + "Player ".concat(player.name, "[white] has left the game. [orange]").concat(t.currentVotes(), "[white] votes, [orange]").concat(t.requiredVotes(), "[white] required.")); });
        });
        globals_1.FishEvents.on("playerTeamChange", function (_, fishP, previous) {
            managers[previous.id].unvote(fishP);
        });
        return {
            args: [],
            description: "Vote to surrender to the enemy team.",
            perm: commands_1.Perm.play,
            requirements: [commands_1.Req.mode("pvp"), commands_1.Req.teamAlive],
            data: { managers: managers },
            handler: function (_a) {
                var sender = _a.sender;
                if (sender.ranksAtLeast("mod"))
                    commands_1.Req.cooldown(5000);
                else
                    commands_1.Req.cooldown(20000);
                managers[sender.team().id].vote(sender, 1, 0);
            },
        };
    }), stats: {
        args: ["target:player"],
        perm: commands_1.Perm.none,
        description: "Views a player's stats.",
        handler: function (_a) {
            var target = _a.args.target, output = _a.output, f = _a.f;
            output(f(templateObject_18 || (templateObject_18 = __makeTemplateObject(["[accent]Statistics for player ", ":\n(note: we started recording statistics on 22 Jan 2024)\n[white]--------------[]\nBlocks broken: ", "\nBlocks placed: ", "\nChat messages sent: ", "\nGames finished: ", "\nTime in-game: ", "\nWin rate: ", ""], ["[accent]\\\nStatistics for player ", ":\n(note: we started recording statistics on 22 Jan 2024)\n[white]--------------[]\nBlocks broken: ", "\nBlocks placed: ", "\nChat messages sent: ", "\nGames finished: ", "\nTime in-game: ", "\nWin rate: ", ""])), target, target.stats.blocksBroken, target.stats.blocksPlaced, target.stats.chatMessagesSent, target.stats.gamesFinished, (0, utils_1.formatTime)(target.stats.timeInGame), target.stats.gamesWon / target.stats.gamesFinished));
        }
    }, showworld: {
        args: ["x:number?", "y:number?", "size:number?"],
        perm: commands_1.Perm.none,
        description: "Views the world as a 2D scrollable menu.",
        requirements: [commands_1.Req.cooldown(4000)],
        handler: function (_a) {
            var sender = _a.sender, _b = _a.args, _c = _b.size, size = _c === void 0 ? 7 : _c, x = _b.x, y = _b.y;
            if (size > 20)
                (0, commands_1.fail)("Size ".concat(size, " is too high!"));
            if (Vars.state.rules.fog)
                (0, commands_1.fail)("This command is disabled when fog is enabled.");
            var options = (0, funcs_1.to2DArray)(Reflect.get(Vars.world.tiles, "array").map(function (tile) { return ({
                text: tile.block().emoji(),
                data: null,
            }); }), Vars.world.width()).reverse();
            var height = Vars.world.height();
            menus_1.Menu.scroll(sender, "The World", "Use the arrow keys to navigate around the world. Click a blank square to exit.", options, {
                columns: size,
                rows: size,
                x: x ? x - Math.trunc(size / 2) : 0,
                y: height - (y ? y + 1 + Math.trunc(size / 2) : size),
                getCenterText: function (x, y) { return "".concat(x, ",").concat(height - y - size); }
            });
        }
    }, mapinfo: {
        args: ["map:map?"],
        perm: commands_1.Perm.none,
        description: "Displays information about a map.",
        handler: function (_a) {
            var output = _a.output, map = _a.args.map, f = _a.f, sender = _a.sender;
            if (map) {
                output(maps_1.FMap.getCreate(map).displayStats(f));
            }
            else {
                menus_1.Menu.textPages(sender, Vars.maps.customMaps().map(function (m) {
                    return ["Map information", function () { return maps_1.FMap.getCreate(m).displayStats(f); }];
                }).toArray(), {
                    startPage: Vars.maps.customMaps().toArray().indexOf(Vars.state.map),
                });
            }
        }
    }, gamemode: {
        args: ["mode:string"],
        perm: new commands_1.Perm("changeGamemode", "manager").exceptModes({
            testsrv: commands_1.Perm.play,
        }),
        description: "Sets the gamemode.",
        requirements: [commands_1.Req.cooldownGlobal(10000)],
        handler: function (_a) {
            var args = _a.args, sender = _a.sender, outputSuccess = _a.outputSuccess;
            if (!sender.hasPerm('trusted'))
                commands_1.Req.cooldownGlobal(30000);
            //Unpause
            Vars.state.set(GameState.State.playing);
            switch (args.mode) {
                case "attack":
                    Vars.state.rules.attackMode = true;
                    Vars.state.rules.pvp = false;
                    break;
                case "survival":
                    Vars.state.rules.attackMode = false;
                    Vars.state.rules.waves = true;
                    Vars.state.rules.pvp = false;
                    break;
                case "pvp":
                    Vars.state.rules.attackMode = true;
                    Vars.state.rules.pvp = true;
                    Vars.state.rules.waves = false;
                    break;
                default: (0, commands_1.fail)("Invalid mode, valid modes are: attack, survival, pvp");
            }
            var reloader = new WorldReloader();
            Reflect.set(reloader, "wasServer", true);
            Reflect.set(reloader, "players", Groups.player.copy());
            Call.worldDataBegin();
            reloader.end();
            outputSuccess("Changed mode to ".concat(args.mode));
        }
    }, v8poll: {
        args: [],
        perm: commands_1.Perm.none,
        description: "Displays the v8 poll.",
        handler: function (_a) {
            var sender = _a.sender;
            sender.runv8poll();
        }
    }, v8upgrade: {
        args: [],
        perm: commands_1.Perm.none,
        description: "Provides instructions to update to v8.",
        handler: function (_a) {
            var sender = _a.sender;
            menus_1.Menu.menu("V8 Migration Information", "Where did you download Mindustry?", sender.con.mobile ? [
                "Google Play Store",
                "Apple App Store",
                "itch.io",
                "F-Droid (APK)",
            ] : [
                "Steam",
                "itch.io",
                "GitHub",
                "Foo's Client",
                "MindustryLauncher",
            ], sender, { onCancel: 'reject', includeCancel: true }).then(function (response) {
                var message = (0, utils_1.match)(response, {
                    "Google Play Store": "It is possible to update by selecting the \"Join the beta\" option in the app's page, and then updating the game. It is also possible to switch back to v7 by leaving the beta program.",
                    "Foo's Client": "It is easy to switch between v7 and v8 by simply clicking the button on the title screen.",
                    "GitHub": "It is easy to update by downloading the Mindustry.jar file from the latest \"pre-release\" release. It is also easy to switch back to v7, by running your current Mindustry.jar file.",
                    "itch.io": "It is easy to update by downloading the file marked \"unstable\". It is also easy to switch back to v7, by opening your existing installation of the game.",
                    "F-Droid (APK)": "It is easy to update by downloading the latest release from F-Droid.",
                    "Apple App Store": "It is possible to update to v8 by installing the TestFlight app and then using this link https://testflight.apple.com/join/79Azm1hZ to join the beta.",
                    "Steam": "It is possible to update to v8 by right-clicking Mindustry in your library, selecting Properties -> Betas and selecting v8 beta. You can also switch back to v7 using this method.",
                    "MindustryLauncher": "It is easy to update to v8 by specifying the version as \"v149\" or \"foo-v8-latest\" with the --version flag."
                });
                sender.sendMessage("[coral]V8 Migration[] for [accent]".concat(response, "[]: ").concat(message, "\nIf you update now, you will not be able to join Fish anymore without downgrading to v7! Wait until Fish updates before updating.\nRun [accent]/v8poll[] to let us know if you will update when that happens."));
            });
        }
    }, v8pollresults: {
        args: [],
        perm: commands_1.Perm.mod,
        description: "Displays v8 poll results.",
        requirements: [commands_1.Req.cooldownGlobal(10000)],
        handler: function (_a) {
            var e_1, _b;
            var output = _a.output;
            var totals = [0, 0, 0, 0, 0];
            try {
                for (var _c = __values(Object.values(players_1.FishPlayer.cachedPlayers)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var player = _d.value;
                    if (player.info().timesJoined >= 10) {
                        totals[player.pollResponse]++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            output("Poll not viewed: ".concat(totals[0], "\nPoll canceled: ").concat(totals[1], "\nI won't or can't update to v8: ").concat(totals[2], "\nI will update to v8 if Fish updates to v8: ").concat(totals[3], "\nI have already updated to v8: ").concat(totals[4]));
        }
    }, highscore: {
        args: [],
        perm: commands_1.Perm.none,
        description: 'This command was moved to /mapinfo.',
        handler: function () {
            (0, commands_1.fail)("This command was moved to /mapinfo.");
        }
    } }));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
