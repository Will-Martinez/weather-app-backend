import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


export default class ApiDocService {
    public setupSwagger(app: INestApplication): void {
        const config = new DocumentBuilder()
            .setTitle("API DOC")
            .setDescription("Weather App API's doc")
            .setVersion("1.0")
            .addApiKey()
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup("api/doc", app, document);
    }
}