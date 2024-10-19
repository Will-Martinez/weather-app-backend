import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import CreateUserRequestDto from "./dtos/request/create.user.request.dto";
import CreateUserResponsetDto from "./dtos/response/create.user.response.dto";
import UserService from "./user.service";
import AuthUserRequestDto from "./dtos/request/auth.user.request.dto";
import AuthUserResponseDto from "./dtos/response/auth.user.response.dto";
import { Response } from "express";


@ApiTags("User")
@Controller("/api/user")
export default class UserController
{
    constructor(
        private readonly userService: UserService
    ) {}

    @Post("signup")
    @ApiBody({ type: CreateUserRequestDto })
    @ApiResponse({
        status: 201,
        description: "Create a new user.",
        type: CreateUserRequestDto
    })
    public async signup(@Body() createUserRequestDto: CreateUserRequestDto)
    {
        return await this.userService.signupUser(createUserRequestDto);
    }

    @Post("signin")
    @ApiBody({ type: AuthUserRequestDto })
    @ApiResponse({
        status: 200,
        description: "Gives back the access and refresh token",
        type: AuthUserResponseDto
    })
    public async signin(
        @Body() authUserRequestDto: AuthUserRequestDto
    )
    {
        return await this.userService.signinUser(authUserRequestDto);
    }
}