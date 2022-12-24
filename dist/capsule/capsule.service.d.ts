import { Model, ObjectId } from 'mongoose';
import { CreateCapsuleDto, UpdateCapsuleDto } from './dto/create-capsule.dto';
import { Capsule, CapsuleDocument } from './model/capsule.model';
export declare class CapsuleService {
    private capsuleModel;
    constructor(capsuleModel: Model<CapsuleDocument>);
    create(dto: CreateCapsuleDto): Promise<Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(_id: ObjectId): Promise<void>;
    update(dto: UpdateCapsuleDto): Promise<Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getRecomendation(product: ObjectId): Promise<(Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getAll(): Promise<Omit<Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getOne(_id: ObjectId): Promise<Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
