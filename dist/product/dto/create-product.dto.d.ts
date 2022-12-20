import { Color, ProductImage, ProductMaterial, Size } from '../models/product.model';
import * as mongoose from 'mongoose';
export declare class CreateProductDto {
    title: string;
    price: number;
    sale: number;
    hit: boolean;
    description: string;
    material: ProductMaterial[];
    images: ProductImage[];
    color: Color;
    category: string;
    sizes: Size[];
    code: string;
    colections?: mongoose.Types.ObjectId;
    capsule?: mongoose.Types.ObjectId;
    disabled: boolean;
}
