import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    username: string;
    password: string;
    token: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
