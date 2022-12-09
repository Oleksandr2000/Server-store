import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
    @Prop({ unique: true })
    name: string;

    @Prop({ unique: true })
    slug: string;

    @Prop()
    img: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
