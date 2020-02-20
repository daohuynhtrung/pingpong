import { Entity } from '@loopback/repository';
export declare class Post extends Entity {
    id?: number;
    userId: number;
    title: string;
    content?: string;
    constructor(data?: Partial<Post>);
}
export interface PostRelations {
}
export declare type PostWithRelations = Post & PostRelations;
