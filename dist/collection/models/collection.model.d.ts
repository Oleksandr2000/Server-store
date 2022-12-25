import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type CollectionDocument = Collection & Document;
export declare class Collection {
    name: string;
    img: string;
    products: mongoose.Types.ObjectId[];
}
export declare const CollectionSchema: mongoose.Schema<Collection, mongoose.Model<Collection, any, any, any, any>, {}, {}, {}, {}, "type", Collection>;
