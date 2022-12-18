import { ObjectId } from 'mongoose';

export class AddToFavoriteDto {
    readonly user: ObjectId;
    readonly product: ObjectId;
}
