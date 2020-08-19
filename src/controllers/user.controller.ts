import { 
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  model,
  property
} from "@loopback/repository";
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';

import { User } from "../models";
// import { UserRepository } from "../repositories";
import {inject} from '@loopback/core';
import {
  TokenServiceBindings,
  MyUserService,
  UserServiceBindings,
  UserRepository,
  Credentials
} from '@loopback/authentication-jwt';
import {authenticate, TokenService} from '@loopback/authentication';
import {SecurityBindings, UserProfile, securityId} from '@loopback/security';
import {genSalt, hash} from 'bcryptjs';
import _ from 'lodash';

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

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': {schema: CredentialsSchema},
  },
};

export class UserController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(SecurityBindings.USER, {optional: true})
    public user: UserProfile,
    @repository(UserRepository)
    public userRepository : UserRepository
  ) {}

  @get('/users', {
    responses: {
      '200': {
        description: 'First time making controller',
        schema: {
          type: 'array',
          items: getModelSchemaRef(User, {includeRelations: true}),
        }
      }
    }
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @post('/users/login', {
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
  })
  async login(
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{token: string}> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);
    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);
    return {token};
  }

  @authenticate('jwt')
  @get('/whoAmI', {
    responses: {
      '200': {
        description: '',
        schema: {
          type: 'string',
        },
      },
    },
  })
  async whoAmI(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
  ): Promise<string> {
    return currentUserProfile[securityId];
  }

  @post('/signup', {
    responses: {
      '200': {
        description: 'User',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': User,
            },
          },
        },
      },
    },
  })
  async signUp(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUser',
          }),
        },
      },
    })
    user: User,
  ): Promise<User> {
    // const password = await hash(user.password, await genSalt());
    // const savedUser = await this.userRepository.create(
    //   _.omit(user, 'password'),
    // );

    // await this.userRepository.create(user);

    return this.userRepository.create(user);
  }
}
