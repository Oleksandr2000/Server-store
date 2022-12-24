import { ObjectId } from 'mongoose';
export declare class AddToBasketDto {
    readonly user: ObjectId;
    readonly product: ObjectId;
    readonly size: string;
    readonly count?: number;
}
