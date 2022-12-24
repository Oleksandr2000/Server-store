import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type BasketDocument = Basket & Document;
export declare class Basket {
    user: ObjectId;
    product: any;
    size: string;
    count: number;
}
export declare const BasketSchema: mongoose.Schema<Basket, mongoose.Model<Basket, any, any, any, any>, {}, {}, {}, {}, "type", Basket>;
