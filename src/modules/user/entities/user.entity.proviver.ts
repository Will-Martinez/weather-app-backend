import UserModel from "./user.entity";

export const userEntityProvider = [
    {
        provide: "USER_MODEL",
        useValue: UserModel
    }
]