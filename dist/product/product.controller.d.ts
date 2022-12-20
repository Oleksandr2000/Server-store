import { CreateProductDto } from './dto/create-product.dto';
import { filterProductDto } from './dto/filter-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): Promise<import("./models/product.model").Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(query: filterProductDto): Promise<{
        count: number;
        products: (import("./models/product.model").Product & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getOne(param: {
        id: string;
    }): Promise<{
        product: import("./models/product.model").Product & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        variants: (import("./models/product.model").Product & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    delete(param: {
        id: string;
    }): Promise<void>;
    update(param: {
        id: string;
    }, dto: CreateProductDto): Promise<import("./models/product.model").Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
