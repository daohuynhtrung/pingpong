import { DefaultCrudRepository } from '@loopback/repository';
import { Post, PostRelations } from '../models';
import { PostDataSource } from '../datasources';
export declare class PostRepository extends DefaultCrudRepository<Post, typeof Post.prototype.id, PostRelations> {
    constructor(dataSource: PostDataSource);
}
