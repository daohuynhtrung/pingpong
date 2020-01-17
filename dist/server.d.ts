import { ApplicationConfig } from '@loopback/core';
export declare class ExpressServer {
    private app;
    private server;
    private lbApp;
    constructor(options?: ApplicationConfig);
    boot(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
}
