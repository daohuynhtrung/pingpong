"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
const express_1 = __importDefault(require("express"));
const p_event_1 = __importDefault(require("p-event"));
class ExpressServer {
    constructor(options = {}) {
        this.app = express_1.default();
        this.lbApp = new application_1.PingpongApplication(options);
        this.app.use('/api', this.lbApp.requestHandler);
        this.app.get('/hello', function (req, res) {
            res.send('hello');
        });
        this.app.use(express_1.default.static('public'));
    }
    async boot() {
        await this.lbApp.boot();
    }
    async start() {
        await this.lbApp.start();
        const port = this.lbApp.restServer.config.port || 3000;
        const host = this.lbApp.restServer.config.host || '127.0.0.1';
        this.server = this.app.listen(port, host);
        await p_event_1.default(this.server, 'listening');
    }
    // For testing purposes
    async stop() {
        if (!this.server)
            return;
        await this.lbApp.stop();
        this.server.close();
        await p_event_1.default(this.server, 'close');
        // this.server = undefined;
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=server.js.map