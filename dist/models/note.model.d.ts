import { Entity } from '@loopback/repository';
export declare class Note extends Entity {
    id?: number;
    title: string;
    content?: string;
    [prop: string]: any;
    constructor(data?: Partial<Note>);
}
export interface NoteRelations {
}
export declare type NoteWithRelations = Note & NoteRelations;
