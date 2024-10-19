import { Inject, Injectable } from "@nestjs/common";
import UserModel from "../entities/user.entity";
import CreateUserRequestDto from "../dtos/request/create.user.request.dto";



@Injectable()
export default class UserRepository
{
    constructor(
        @Inject("USER_MODEL")
        private readonly userModel: typeof UserModel
    ) {}


    public async getAllUsers(): Promise<UserModel[]>
    {
        return await this.userModel.findAll()
    }

    public async getUserByEmail(email: string): Promise<UserModel>
    {
        return await this.userModel.findOne({
            where: {
                email
            }
        });
    }

    public async createNewUser(newUser: CreateUserRequestDto): Promise<UserModel> 
    {
        return await this.userModel.create({ ...newUser })
    }
}