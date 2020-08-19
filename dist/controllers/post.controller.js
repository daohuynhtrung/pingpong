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
const authentication_1 = require("@loopback/authentication");
let PostController = class PostController {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async create(post) {
        return this.postRepository.create(post);
    }
    async count(where) {
        return this.postRepository.count(where);
    }
    async find(filter) {
        return this.postRepository.find(filter);
    }
    async updateAll(post, where) {
        return this.postRepository.updateAll(post, where);
    }
    async findById(id, filter) {
        return this.postRepository.findById(id, filter);
    }
    async updateById(id, post) {
        await this.postRepository.updateById(id, post);
    }
    async replaceById(id, post) {
        await this.postRepository.replaceById(id, post);
    }
    async deleteById(id) {
        await this.postRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/posts', {
        responses: {
            '200': {
                description: 'Post model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Post) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Post, {
                    title: 'NewPost',
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Post]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    rest_1.get('/posts/count', {
        responses: {
            '200': {
                description: 'Post model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Post))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "count", null);
__decorate([
    rest_1.get('/posts', {
        responses: {
            '200': {
                description: 'Array of Post model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Post, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Post))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "find", null);
__decorate([
    rest_1.patch('/posts', {
        responses: {
            '200': {
                description: 'Post PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Post, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Post))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/posts/{id}', {
        responses: {
            '200': {
                description: 'Post model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Post, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Post))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findById", null);
__decorate([
    rest_1.patch('/posts/{id}', {
        responses: {
            '204': {
                description: 'Post PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Post, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Post]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updateById", null);
__decorate([
    rest_1.put('/posts/{id}', {
        responses: {
            '204': {
                description: 'Post PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Post]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/posts/{id}', {
        responses: {
            '204': {
                description: 'Post DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deleteById", null);
PostController = __decorate([
    authentication_1.authenticate('jwt'),
    __param(0, repository_1.repository(repositories_1.PostRepository)),
    __metadata("design:paramtypes", [repositories_1.PostRepository])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map