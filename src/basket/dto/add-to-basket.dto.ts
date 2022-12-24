import { ObjectId } from 'mongoose';

export class AddToBasketDto {
    readonly user: ObjectId;
    readonly product: ObjectId;
    readonly size: string;
    readonly count?: number;
}
