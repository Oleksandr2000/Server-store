import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CapsuleDocument = Capsule & Document;

@Schema({ timestamps: true })
export class Capsule {
    @Prop({ unique: true })
    name: string;

    @Prop({ type: [mongoose.Types.ObjectId], ref: 'Product' })
    products: mongoose.Types.ObjectId[];
}

export const CapsuleSchema = SchemaFactory.createForClass(Capsule);
