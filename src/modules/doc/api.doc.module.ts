import { Module } from "@nestjs/common";
import ApiDocService from "./api.doc.service";


@Module({
    providers: [ApiDocService]
})
export default class ApiDocModule{}