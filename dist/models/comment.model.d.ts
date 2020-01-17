import { Entity } from '@loopback/repository';
export declare class Comment extends Entity {
    Id?: number;
    post: number;
    [prop: string]: any;
    constructor(data?: Partial<Comment>);
}
export interface CommentRelations {
}
export declare type CommentWithRelations = Comment & CommentRelations;
