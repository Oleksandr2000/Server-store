import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    create(dto: CreateCategoryDto): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(_id: string, dto: CreateCategoryDto): Promise<void>;
    delete(_id: string): Promise<void>;
    getAll(): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOne(_id: string): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
