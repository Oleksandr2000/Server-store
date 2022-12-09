import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserModel = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ unique: true })
    email: string;

    @Prop()
    passwordHash: string;

    @Prop()
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
