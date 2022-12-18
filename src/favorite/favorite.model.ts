import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';

export type FavoriteDocument = Favorite & Document;

@Schema({ timestamps: true })
export class Favorite {
    @Prop({ type: mongoose.Types.ObjectId })
    user: ObjectId;

    @Prop({ type: mongoose.Types.ObjectId })
    product: ObjectId;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
