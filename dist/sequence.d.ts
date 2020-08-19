import { FindRoute, InvokeMethod, ParseParams, Reject, RequestContext, Send, SequenceHandler } from '@loopback/rest';
import { AuthenticateFn } from '@loopback/authentication';
export declare class MySequence implements SequenceHandler {
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    send: Send;
    reject: Reject;
    protected authenticateRequest: AuthenticateFn | any;
    constructor(findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject, authenticateRequest: AuthenticateFn | any);
    handle(context: RequestContext): Promise<void>;
}
