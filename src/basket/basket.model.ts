import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';

export type BasketDocument = Basket & Document;

@Schema({ timestamps: true })
export class Basket {
    @Prop({ type: mongoose.Types.ObjectId })
    user: ObjectId;

    @Prop({ type: mongoose.Types.ObjectId })
    product: ObjectId;

    @Prop()
    size: number;

    @Prop()
    count: number;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);
