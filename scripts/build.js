"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const esbuild = __importStar(require("esbuild"));
const node_fs_1 = __importDefault(require("node:fs"));
if (/scripts(\/\\)?$/.test(process.cwd()))
    process.chdir("..");
const banner = `/${"*".repeat(30)}
fish-commands compiled output
${node_fs_1.default.readFileSync("LICENSE", "utf-8")}
Source code available at https://github.com/Fish-Community/fish-commands/
${"*".repeat(30)}/`;
esbuild.buildSync({
    entryPoints: ["./src/index.ts"],
    banner: { js: banner },
    footer: { js: banner },
    format: "iife",
    outfile: "./build/scripts/bundle.js",
    target: "es5",
    supported: {
        "arrow": true,
        "const-and-let": true,
        "destructuring": true,
        "for-of": true,
        "function-name-configurable": false,
        "generator": true,
    },
    minify: false,
    treeShaking: false,
});
