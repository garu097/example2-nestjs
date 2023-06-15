import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swaggerSetup = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Swagger')
        .setDescription('API document.')
        .setVersion('1.0')
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        })
        .build()
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {
        swaggerOptions: { 
            persistAuthorization: true,
            defaultModelsExpandDepth: -1, // hidden schema
            tagsSorter: 'alpha',
            // operationsSorter: 'alpha', 
        }, 
    });
}