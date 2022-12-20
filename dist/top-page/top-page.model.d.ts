/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare class TopAdvantages {
    title: string;
    description: string;
}
export declare class Offer {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}
export declare type TopPageModel = TopPage & Document;
export declare class TopPage {
    firstCategory: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    offer?: Offer;
    advantages?: TopAdvantages[];
    seoText: string;
    tagsTitle?: string;
    tags: string[];
}
export declare const TopPageSchema: import("mongoose").Schema<TopPage, import("mongoose").Model<TopPage, any, any, any, any>, {}, {}, {}, {}, "type", TopPage>;
