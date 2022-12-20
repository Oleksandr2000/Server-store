import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type ProductMaterial = {
    id?: string;
    name: string;
    value: number;
};
export declare type Size = {
    id?: string;
    name: string;
    count: number;
};
export declare type Color = {
    name: string;
    value: string;
};
export declare type ProductImage = {
    id: string;
    src: string;
};
export declare type ProductDocument = Product & Document;
export declare class Product {
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
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, any>, {}, {}, {}, {}, "type", Product>;
