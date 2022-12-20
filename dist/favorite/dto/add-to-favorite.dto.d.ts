import { ObjectId } from 'mongoose';
export declare class AddToFavoriteDto {
    readonly user: ObjectId;
    readonly product: ObjectId;
}
