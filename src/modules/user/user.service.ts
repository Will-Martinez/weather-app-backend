import { BadRequestException, ForbiddenException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import LogService from "../log/log.service";
import UserRepository from "./repository/user.repository";
import AuthService from "../auth/auth.service";
import CreateUserRequestDto from "./dtos/request/create.user.request.dto";
import UserModel from "./entities/user.entity";
import CreateUserResponseDto from "./dtos/response/create.user.response.dto";
import * as argon2 from "argon2";
import AuthUserRequestDto from "./dtos/request/auth.user.request.dto";
import AuthUserResponseDto from "./dtos/response/auth.user.response.dto";
import { Response } from "express";


@Injectable()
export default class UserService
{
    constructor(
        private readonly logService: LogService,
        private readonly userRepository: UserRepository,
        private readonly authService: AuthService
    ) {}

    public async signupUser(createUserRequestDto: CreateUserRequestDto): Promise<CreateUserResponseDto>
    {
        try {
            const user: UserModel = await this.userRepository.getUserByEmail(createUserRequestDto.email);

            if (user)
                throw new BadRequestException(`The e-mail ${createUserRequestDto.email} is already registered.`);

            createUserRequestDto.password = await argon2.hash(createUserRequestDto.password);

            return await this.userRepository.createNewUser(createUserRequestDto);
        } catch (error) {
            this.logService.error(
                UserService.name,
                "Failed trying to create a new user.",
                error
            );
            throw new InternalServerErrorException(error.message);
        }
    }

    public async signinUser(authUserRequestDto: AuthUserRequestDto): Promise<AuthUserResponseDto>
    {
        try {
            const user: UserModel = await this.userRepository.getUserByEmail(authUserRequestDto.email);
            
            if (!user)
                throw new NotFoundException(`User with e-mail ${authUserRequestDto.email} not found.`);

            const isUserPasswordValid: boolean = await argon2.verify(user.password, authUserRequestDto.password);
            
            if (!isUserPasswordValid)
                throw new ForbiddenException("Password invalid.");

            return this.authService.signToken(user.id, user.email);
        } catch (error) {
            this.logService.error(
                UserService.name,
                "Failed trying to create a new user.",
                error
            );
            throw new InternalServerErrorException(error.message);
        }
    }
}