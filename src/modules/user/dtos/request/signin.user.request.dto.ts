import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export default class SigninUserRequestDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: "User e-mail for signin.",
        type: String
    })
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User password for signin.",
        type: String
    })
    password: string
}