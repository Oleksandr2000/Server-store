import { ObjectId } from 'mongoose';

export class ConfirmOrderDto {
    readonly userId: ObjectId;
    readonly name: string;
    readonly email: string;
    readonly number: string;
    readonly city: string;
    readonly adress: string;
    readonly payment: string;
    readonly delivery: string;
    readonly basket: ObjectId[];
}
