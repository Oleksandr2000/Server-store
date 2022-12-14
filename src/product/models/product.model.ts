import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ProductMaterial = {
    id?: string;

    name: string;

    value: number;
};

export type Size = {
    id?: string;
    name: string;
    count: number;
};

export type Color = {
    name: string;
    value: string;
};

export type ProductImage = {
    id: string;
    src: string;
};

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    sale: number;

    @Prop()
    currentPrice: number;

    @Prop()
    hit: boolean;

    @Prop()
    description: string;

    @Prop()
    material: ProductMaterial[];

    @Prop({ type: Array })
    images: ProductImage[];

    @Prop({ type: Object })
    color: Color;

    @Prop()
    category: string;

    @Prop()
    sizes: Size[];

    @Prop()
    code: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'collection' })
    colections?: mongoose.Types.ObjectId;

    @Prop({ type: [mongoose.Types.ObjectId], ref: 'Product' })
    recomendation?: mongoose.Types.ObjectId[];

    @Prop()
    disabled: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
