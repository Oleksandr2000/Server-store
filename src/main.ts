import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: '*',
        allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    });
    await app.listen(process.env.PORT, () => {
        console.log(`Server started on ${process.env.PORT}`);
    });
}

start();
