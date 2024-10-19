import { IsNotEmpty, IsString, IsEmail, IsNumber, ValidateNested } from "class-validator";

export default class AuthDto
{
    @IsNumber()
    @IsNotEmpty()
    userId: number

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}