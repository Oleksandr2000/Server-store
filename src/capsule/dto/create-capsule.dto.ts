import { ObjectId } from 'mongoose';

export class CreateCapsuleDto {
    readonly name: string;
    readonly products: string[];
}

export class UpdateCapsuleDto extends CreateCapsuleDto {
    readonly _id: ObjectId;
    readonly name: string;
    readonly products: string[];
}
