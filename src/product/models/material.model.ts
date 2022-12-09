import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MaterialDocument = Material & Document;

@Schema({ timestamps: true })
export class Material {
    @Prop()
    name: string;

    @Prop()
    value: number;

    @Prop()
    category: string;
}

export const MaterialSchema = SchemaFactory.createForClass(Material);
