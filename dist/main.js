"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT, () => {
        console.log(`Server started on ${process.env.PORT}`);
    });
}
start();
//# sourceMappingURL=main.js.map