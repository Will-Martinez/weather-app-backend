import { 
    Table, 
    Model, 
    Column, 
    NotNull, 
    Unique, 
    PrimaryKey, 
    AutoIncrement,
    AllowNull
 } from "sequelize-typescript";

 
 @Table({
    tableName: "users"
 })
export default class UserModel extends Model
{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column
    id?: number
    
    @AllowNull(false)
    @Column
    userName: string

    @AllowNull(false)
    @Unique
    @Column
    email: string

    @AllowNull(false)
    @Column
    password: string
}