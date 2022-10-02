"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
const express_1 = __importDefault(require("express"));
const environment_1 = __importDefault(require("@src/environment"));
const app = (0, express_1.default)();
const { port } = environment_1.default.app;
const server = new server_1.Server(app);
server.start(port);
