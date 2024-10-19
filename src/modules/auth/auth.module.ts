import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import JwtStrategy from "./strategy/jwt.strategy";
import AuthService from "./auth.service";

@Module({
    imports: [
        JwtModule.register({})
    ],
    controllers: [],
    providers: [
        AuthService,
        JwtStrategy
    ],
    exports: [AuthService]
})
export default class AuthModule {}