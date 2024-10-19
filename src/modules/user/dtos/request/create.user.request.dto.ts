import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export default class CreateUserRequestDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User name",
        type: String
    })
    userName: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: "User e-mail.",
        type: String
    })
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User password.",
        type: String
    })
    password: string
}