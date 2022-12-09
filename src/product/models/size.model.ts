import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SizeDocument = Size & Document;

@Schema({ timestamps: true })
export class Size {
    @Prop()
    name: string;

    @Prop()
    category: string;
}

export const SizeSchema = SchemaFactory.createForClass(Size);
