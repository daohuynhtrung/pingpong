"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.PingpongApplication = application_1.PingpongApplication;
const server_1 = require("./server");
exports.ExpressServer = server_1.ExpressServer;
async function main(options = {}) {
    // const app = new PingpongApplication(options);
    // await app.boot();
    // await app.start();
    // const url = app.restServer.url;
    // console.log(`Server is running at ${url}`);
    // console.log(`Try ${url}/ping`);
    // return app;
    const server = new server_1.ExpressServer(options);
    await server.boot();
    await server.start();
    console.log('U r fucking at localhost:3000');
}
exports.main = main;
//# sourceMappingURL=index.js.map