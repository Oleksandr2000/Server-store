import { Model } from 'mongoose';
import { CreateColectionDto } from 'src/product/dto/create-colection.dto';
import { Collection, CollectionDocument } from './models/collection.model';
export declare class CollectionService {
    private collectionModel;
    constructor(collectionModel: Model<CollectionDocument>);
    create(dto: CreateColectionDto): Promise<Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<Omit<Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    remove(_id: string): Promise<void>;
    update(dto: CreateColectionDto, _id: string): Promise<Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
