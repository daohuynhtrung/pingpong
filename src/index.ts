import {PingpongApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {ExpressServer} from './server';

export {ExpressServer, PingpongApplication};

export async function main(options: ApplicationConfig = {}) {
  // const app = new PingpongApplication(options);
  // await app.boot();
  // await app.start();

  // const url = app.restServer.url;
  // console.log(`Server is running at ${url}`);
  // console.log(`Try ${url}/ping`);

  // return app;

  const server = new ExpressServer(options);
  await server.boot();
  await server.start();
  console.log('U r fucking at localhost:3000');
}
