import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swaggerSetup = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Swagger')
        .setDescription('API document.')
        .setVersion('1.0')
        .build()
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
}