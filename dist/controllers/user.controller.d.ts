import { Filter } from "@loopback/repository";
import { User } from "../models";
import { UserRepository } from "../repositories";
import { MyUserService, Credentials } from '@loopback/authentication-jwt';
import { TokenService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: {
                type: string;
                required: string[];
                properties: {
                    username: {
                        type: string;
                    };
                    password: {
                        type: string;
                        minLength: number;
                    };
                };
            };
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    userService: MyUserService;
    user: UserProfile;
    userRepository: UserRepository;
    constructor(jwtService: TokenService, userService: MyUserService, user: UserProfile, userRepository: UserRepository);
    find(filter?: Filter<User>): Promise<User[]>;
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    whoAmI(currentUserProfile: UserProfile): Promise<string>;
    signUp(user: User): Promise<User>;
}
