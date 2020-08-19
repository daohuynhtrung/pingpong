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
const core_1 = require("@loopback/core");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const authentication_1 = require("@loopback/authentication");
const security_1 = require("@loopback/security");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
// const CredentialsScheme
// @model()
// export class NewUserRequest extends User {
//   @property({
//     type: 'string',
//     required: true,
//   })
//   username: string;
//   @property({
//     type: 'string',
//     required: true,
//   })
//   password: string;
// }
const CredentialsSchema = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: {
            type: 'string',
        },
        password: {
            type: 'string',
            minLength: 8,
        },
    },
};
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
let UserController = class UserController {
    constructor(jwtService, userService, user, userRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.user = user;
        this.userRepository = userRepository;
    }
    async find(filter) {
        return this.userRepository.find(filter);
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        return { token };
    }
    async whoAmI(currentUserProfile) {
        return currentUserProfile[security_1.securityId];
    }
    async signUp(user) {
        // const password = await hash(user.password, await genSalt());
        // const savedUser = await this.userRepository.create(
        //   _.omit(user, 'password'),
        // );
        // await this.userRepository.create(user);
        return this.userRepository.create(user);
    }
};
__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'First time making controller',
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.User, { includeRelations: true }),
                }
            }
        }
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
__decorate([
    rest_1.post('/users/login', {
        responses: {
            '200': {
                description: 'Token',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.requestBody(exports.CredentialsRequestBody)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    authentication_1.authenticate('jwt'),
    rest_1.get('/whoAmI', {
        responses: {
            '200': {
                description: '',
                schema: {
                    type: 'string',
                },
            },
        },
    }),
    __param(0, core_1.inject(security_1.SecurityBindings.USER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "whoAmI", null);
__decorate([
    rest_1.post('/signup', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.User,
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, {
                    title: 'NewUser',
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
UserController = __decorate([
    __param(0, core_1.inject(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    __param(1, core_1.inject(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
    __param(2, core_1.inject(security_1.SecurityBindings.USER, { optional: true })),
    __param(3, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [Object, authentication_jwt_1.MyUserService, Object, repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map