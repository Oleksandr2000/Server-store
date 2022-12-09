import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class TopAdvantages {
    @Prop()
    title: string;
    @Prop()
    description: string;
}

export class Offer {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}

export type TopPageModel = TopPage & Document;

@Schema({ timestamps: true })
export class TopPage {
    @Prop()
    firstCategory: string;
    @Prop()
    secondCategory: string;
    @Prop({ unique: true })
    alias: string;
    @Prop()
    title: string;
    @Prop()
    category: string;
    @Prop(Offer)
    offer?: Offer;
    @Prop([TopAdvantages])
    advantages?: TopAdvantages[];
    @Prop()
    seoText: string;
    @Prop()
    tagsTitle?: string;
    @Prop([String])
    tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
