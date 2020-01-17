import { DefaultCrudRepository } from '@loopback/repository';
import { Note, NoteRelations } from '../models';
import { DsDataSource } from '../datasources';
export declare class NoteRepository extends DefaultCrudRepository<Note, typeof Note.prototype.id, NoteRelations> {
    constructor(dataSource: DsDataSource);
}
