"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let NoteController = class NoteController {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }
    async create(note) {
        return this.noteRepository.create(note);
    }
    async count(where) {
        return this.noteRepository.count(where);
    }
    async find(filter) {
        return this.noteRepository.find(filter);
    }
    async updateAll(note, where) {
        return this.noteRepository.updateAll(note, where);
    }
    async findById(id, filter) {
        return this.noteRepository.findById(id, filter);
    }
    async updateById(id, note) {
        await this.noteRepository.updateById(id, note);
    }
    async replaceById(id, note) {
        await this.noteRepository.replaceById(id, note);
    }
    async deleteById(id) {
        await this.noteRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/notes', {
        responses: {
            '200': {
                description: 'Note model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Note) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Note, {
                    title: 'NewNote',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "create", null);
__decorate([
    rest_1.get('/notes/count', {
        responses: {
            '200': {
                description: 'Note model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Note))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "count", null);
__decorate([
    rest_1.get('/notes', {
        responses: {
            '200': {
                description: 'Array of Note model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Note, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Note))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "find", null);
__decorate([
    rest_1.patch('/notes', {
        responses: {
            '200': {
                description: 'Note PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Note, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Note))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Note, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/notes/{id}', {
        responses: {
            '200': {
                description: 'Note model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Note, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Note))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "findById", null);
__decorate([
    rest_1.patch('/notes/{id}', {
        responses: {
            '204': {
                description: 'Note PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Note, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Note]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "updateById", null);
__decorate([
    rest_1.put('/notes/{id}', {
        responses: {
            '204': {
                description: 'Note PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Note]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/notes/{id}', {
        responses: {
            '204': {
                description: 'Note DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "deleteById", null);
NoteController = __decorate([
    __param(0, repository_1.repository(repositories_1.NoteRepository)),
    __metadata("design:paramtypes", [repositories_1.NoteRepository])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map