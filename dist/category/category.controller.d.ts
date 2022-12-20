import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(dto: CreateCategoryDto): Promise<import("./category.model").Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(param: {
        id: string;
    }, dto: CreateCategoryDto): Promise<void>;
    delete(param: {
        id: string;
    }): Promise<void>;
    getAll(): Promise<(import("./category.model").Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOne(param: {
        id: string;
    }): Promise<import("./category.model").Category & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
