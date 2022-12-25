import { Model, ObjectId } from 'mongoose';
import { CreateColectionDto } from 'src/product/dto/create-colection.dto';
import { Collection, CollectionDocument } from './models/collection.model';
export declare class CollectionService {
    private collectionModel;
    constructor(collectionModel: Model<CollectionDocument>);
    create(dto: CreateColectionDto): Promise<Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<(Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOne(_id: ObjectId): Promise<Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(_id: ObjectId): Promise<void>;
    update(dto: CreateColectionDto, _id: ObjectId): Promise<Collection & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
