import { Model } from 'mongoose';
import { CreateCapsuleDto } from './dto/create-capsule.dto';
import { CapsuleDocument } from './model/capsule.model';
export declare class CapsuleService {
    private capsuleModel;
    constructor(capsuleModel: Model<CapsuleDocument>);
    create(dto: CreateCapsuleDto): Promise<void>;
    remove(id: string): Promise<void>;
    update(dto: CreateCapsuleDto, id: string): Promise<void>;
}
