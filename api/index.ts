import express from 'express';
import 'dotenv/config';
import '../src/server/shared/services/TranslationsYup';
import { router } from '../src/server/routes';

const server = express();

server.use(express.json());
server.use(router);

export default server;

