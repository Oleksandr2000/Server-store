import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CollectionDocument = Collection & Document;

@Schema({ timestamps: true })
export class Collection {
    @Prop({ unique: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'product' })
    products: mongoose.Types.ObjectId;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
