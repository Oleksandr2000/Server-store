import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BasketController } from './basket.controller';
import { Basket, BasketSchema } from './model/basket.model';
import { BasketService } from './basket.service';
import { Order, OrderSchema } from './model/order.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Basket.name, schema: BasketSchema },
            { name: Order.name, schema: OrderSchema },
        ]),
    ],
    controllers: [BasketController],
    providers: [BasketService],
})
export class BasketModule {}
