import { CapsuleService } from './capsule.service';
import { CreateCapsuleDto } from './dto/create-capsule.dto';
export declare class CapsuleController {
    private capsuleService;
    constructor(capsuleService: CapsuleService);
    create(dto: CreateCapsuleDto): Promise<void>;
    remove(id: string): Promise<void>;
    update(dto: CreateCapsuleDto, id: string): Promise<void>;
}
