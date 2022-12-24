import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type FavoriteDocument = Favorite & Document;
export declare class Favorite {
    user: mongoose.Types.ObjectId;
    product: mongoose.Types.ObjectId;
}
export declare const FavoriteSchema: mongoose.Schema<Favorite, mongoose.Model<Favorite, any, any, any, any>, {}, {}, {}, {}, "type", Favorite>;
