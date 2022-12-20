/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CategoryDocument } from 'src/category/category.model';
import { CreateProductDto } from './dto/create-product.dto';
import { filterProductDto } from './dto/filter-product.dto';
import { ColorDocument } from './models/color.model';
import { MaterialDocument } from './models/material.model';
import { Product, ProductDocument } from './models/product.model';
import { SizeDocument } from './models/size.model';
export declare class ProductService {
    private productModel;
    private categoryModel;
    private colorModel;
    private sizeModel;
    private materialModel;
    constructor(productModel: Model<ProductDocument>, categoryModel: Model<CategoryDocument>, colorModel: Model<ColorDocument>, sizeModel: Model<SizeDocument>, materialModel: Model<MaterialDocument>);
    create(dto: CreateProductDto): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(query: filterProductDto): Promise<{
        count: number;
        products: (Product & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getOne(_id: string): Promise<{
        product: Product & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        variants: (Product & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    delete(_id: string): Promise<void>;
    update(_id: string, dto: CreateProductDto): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
