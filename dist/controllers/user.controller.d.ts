import { Filter } from "@loopback/repository";
import { User } from "../models";
import { UserRepository } from "../repositories";
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(filter?: Filter<User>): Promise<User[]>;
}
