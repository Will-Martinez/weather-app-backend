import { Module } from "@nestjs/common";
import { SqlConnectionModule } from "../database/sql/sql.connection.module";
import AuthModule from "../auth/auth.module";
import UserController from "./user.controller";
import AuthService from "../auth/auth.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import UserService from "./user.service";
import LogService from "../log/log.service";
import UserRepository from "./repository/user.repository";
import { userEntityProvider } from "./entities/user.entity.proviver";


@Module({
    imports: [
        SqlConnectionModule,
        AuthModule
    ],
    controllers: [UserController],
    providers: [
        AuthService,
        ConfigService,
        JwtService,
        UserService,
        LogService,
        UserRepository,
        ...userEntityProvider
    ]
})
export default class UserModule {}