import { ObjectId } from 'mongoose';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
export declare class CollectionController {
    private collectionService;
    constructor(collectionService: CollectionService);
    create(dto: CreateCollectionDto): Promise<import("./models/collection.model").Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<(import("./models/collection.model").Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOne(param: {
        id: ObjectId;
    }): Promise<import("./models/collection.model").Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(param: {
        id: ObjectId;
    }): Promise<void>;
    udpate(dto: CreateCollectionDto, param: {
        id: ObjectId;
    }): Promise<import("./models/collection.model").Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
