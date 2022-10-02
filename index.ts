import { Server } from './src/server';
import express from 'express';
import config from '@src/environment';

const app = express();

const { port } = config.app;

const server = new Server(app);
server.start(port);
