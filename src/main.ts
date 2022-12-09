import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT, () => {
        console.log(`Server started on ${process.env.PORT}`);
    });
}

start();
