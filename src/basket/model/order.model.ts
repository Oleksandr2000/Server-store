import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
    @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
    userId: mongoose.Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    number: string;

    @Prop()
    city: string;

    @Prop()
    adress: string;

    @Prop()
    delivery: string;

    @Prop()
    payment: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'Basket' })
    basket: mongoose.Types.ObjectId[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
