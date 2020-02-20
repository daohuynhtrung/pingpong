import { Count, Filter, Where } from '@loopback/repository';
import { Post } from '../models';
import { PostRepository } from '../repositories';
export declare class PostController {
    postRepository: PostRepository;
    constructor(postRepository: PostRepository);
    create(post: Post): Promise<Post>;
    count(where?: Where<Post>): Promise<Count>;
    find(filter?: Filter<Post>): Promise<Post[]>;
    updateAll(post: Post, where?: Where<Post>): Promise<Count>;
    findById(id: number, filter?: Filter<Post>): Promise<Post>;
    updateById(id: number, post: Post): Promise<void>;
    replaceById(id: number, post: Post): Promise<void>;
    deleteById(id: number): Promise<void>;
}
