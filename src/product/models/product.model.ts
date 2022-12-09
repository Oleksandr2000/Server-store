import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ProductMaterial = {
    name: string;

    value: number;
};

export type Size = {
    name: string;

    disabled: boolean;
};

export type Color = {
    name: string;
    value: string;
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
    hit: boolean;

    @Prop()
    description: string;

    @Prop()
    material: ProductMaterial[];

    @Prop([String])
    images: string[];

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

    @Prop({ type: mongoose.Types.ObjectId, ref: 'capsule' })
    capsule?: mongoose.Types.ObjectId;

    @Prop()
    disabled: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
