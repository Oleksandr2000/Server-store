import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type FavoriteDocument = Favorite & Document;
export declare class Favorite {
    user: ObjectId;
    product: ObjectId;
}
export declare const FavoriteSchema: mongoose.Schema<Favorite, mongoose.Model<Favorite, any, any, any, any>, {}, {}, {}, {}, "type", Favorite>;
