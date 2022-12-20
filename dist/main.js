"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: ['http://localhost:3000', 'https://next-store-liard-three.vercel.app'],
        allowedHeaders: [
            'X-CSRF-Token',
            'X-Requested-With',
            'Accept',
            'Accept-Version',
            'Content-Length',
            'Content-MD5',
            'Content-Type',
            'Date',
            'X-Api-Version',
        ],
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
//# sourceMappingURL=main.js.map