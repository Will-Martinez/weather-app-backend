import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import CreateUserRequestDto from "./dtos/request/create.user.request.dto";
import CreateUserResponsetDto from "./dtos/response/create.user.response.dto";
import UserService from "./user.service";


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
    public async signupUser(@Body() createUserRequestDto: CreateUserRequestDto)
    {
        return await this.userService.signup(createUserRequestDto);
    }
}