import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BasketController } from './basket.controller';
import { Basket, BasketSchema } from './basket.model';
import { BasketService } from './basket.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Basket.name, schema: BasketSchema }])],
    controllers: [BasketController],
    providers: [BasketService],
})
export class BasketModule {}
