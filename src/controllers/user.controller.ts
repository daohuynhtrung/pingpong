import { 
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
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
import { UserRepository } from "../repositories";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class UserController {
  constructor(
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
}
