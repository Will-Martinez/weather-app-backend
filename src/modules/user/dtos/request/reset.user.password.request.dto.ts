import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export default class ResetUserPasswordRequestDto {
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
        description: "User new password.",
        type: String
    })
    password: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "User new password confirmation.",
        type: String
    })
    confirmPassword: string
}