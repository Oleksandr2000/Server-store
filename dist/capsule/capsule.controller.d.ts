import { ObjectId } from 'mongoose';
import { CapsuleService } from './capsule.service';
import { CreateCapsuleDto, UpdateCapsuleDto } from './dto/create-capsule.dto';
export declare class CapsuleController {
    private capsuleService;
    constructor(capsuleService: CapsuleService);
    create(dto: CreateCapsuleDto): Promise<import("./model/capsule.model").Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(param: {
        id: ObjectId;
    }): Promise<void>;
    update(dto: UpdateCapsuleDto): Promise<import("./model/capsule.model").Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<Omit<import("./model/capsule.model").Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getOne(param: {
        id: ObjectId;
    }): Promise<import("./model/capsule.model").Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getRecomendation(param: {
        id: ObjectId;
    }): Promise<(import("./model/capsule.model").Capsule & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
