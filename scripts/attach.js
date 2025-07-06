"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
function fail(message) {
    console.error(message);
    process.exit(1);
}
if (!process.argv[2])
    fail(`Please provide the path to your server jar file. If you do not have one, run the "dev" script instead.`);
const filepath = node_path_1.default.resolve(process.argv[2]);
try {
    node_fs_1.default.accessSync(filepath, node_fs_1.default.constants.R_OK);
}
catch {
    fail(`Path "${filepath}" does not exist or is not accessible.`);
}
if (node_path_1.default.extname(filepath) != ".jar")
    fail(`Path must point to a jar file.`);
const configDir = node_path_1.default.join(filepath, "..", "config");
try {
    if (!node_fs_1.default.statSync(configDir).isDirectory())
        fail(`Config folder at "${configDir}" is not a directory. Are you sure this is a Mindustry server directory?`);
}
catch {
    fail(`Path "${configDir}" does not exist or is not accessible. Are you sure this is a Mindustry server directory?`);
}
const fishCommandsFolder = node_path_1.default.join(configDir, "mods", "fish-commands");
try {
    if (node_fs_1.default.lstatSync(fishCommandsFolder).isSymbolicLink()) {
        //Symlink already exists, delete it
        node_fs_1.default.unlinkSync(fishCommandsFolder);
        console.log(`Unlinked fish-commands.`);
    }
    else {
        fail(`fish-commands folder at "${fishCommandsFolder}" already exists, but is not a symlink. Consider deleting it.`);
    }
}
catch {
    //File does not exist, create a symlink
    const buildPath = node_path_1.default.join(process.argv[1], "../../build");
    console.log(`Creating symlink from "${fishCommandsFolder}" to "${buildPath}"`);
    node_fs_1.default.symlinkSync(buildPath, fishCommandsFolder);
    console.log(`Successfully linked fish-commands.`);
}
