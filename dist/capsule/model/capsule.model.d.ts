import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type CapsuleDocument = Capsule & Document;
export declare class Capsule {
    name: string;
    products: mongoose.Types.ObjectId;
}
export declare const CapsuleSchema: mongoose.Schema<Capsule, mongoose.Model<Capsule, any, any, any, any>, {}, {}, {}, {}, "type", Capsule>;
