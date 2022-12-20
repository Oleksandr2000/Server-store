import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
export declare class CollectionController {
    private collectionService;
    constructor(collectionService: CollectionService);
    create(dto: CreateCollectionDto): Promise<import("./models/collection.model").Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<Omit<import("./models/collection.model").Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    remove(id: string): Promise<void>;
    udpate(dto: CreateCollectionDto, id: string): Promise<import("./models/collection.model").Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
