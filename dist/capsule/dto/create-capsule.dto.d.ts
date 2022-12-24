import { ObjectId } from 'mongoose';
export declare class CreateCapsuleDto {
    readonly name: string;
    readonly products: string[];
}
export declare class UpdateCapsuleDto extends CreateCapsuleDto {
    readonly _id: ObjectId;
    readonly name: string;
    readonly products: string[];
}
