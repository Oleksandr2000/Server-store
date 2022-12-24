import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type OrderDocument = Order & Document;
export declare class Order {
    userId: mongoose.Types.ObjectId;
    name: string;
    email: string;
    number: string;
    city: string;
    adress: string;
    delivery: string;
    payment: string;
    basket: mongoose.Types.ObjectId[];
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, any>, {}, {}, {}, {}, "type", Order>;
