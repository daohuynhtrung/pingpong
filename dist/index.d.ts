import { PingpongApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { ExpressServer } from './server';
export { ExpressServer, PingpongApplication };
export declare function main(options?: ApplicationConfig): Promise<void>;
