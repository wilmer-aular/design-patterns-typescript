"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// import apiRouter from './router';
// import webRouter from './router/web';
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor(app) {
        this.app = app;
        //this.app.use(express.static(path.resolve('./') + '/public'));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        //this.app.set('view engine', 'ejs');
        this.app.use((0, cors_1.default)());
        // this.app.use('/api', apiRouter);
        // this.app.use('/', webRouter);
    }
    start(port) {
        this.app.listen(port, () => console.info(`Server listening on port ${port}!`));
    }
}
exports.Server = Server;
