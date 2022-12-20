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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateFilterDto } from './create-filter.dto';
import { FilterService } from './filter.service';
export declare class FilterController {
    private filterService;
    constructor(filterService: FilterService);
    getAllFilters(): Promise<{
        colors: (import("../product/models/color.model").Color & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        materials: (import("../product/models/material.model").Material & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getCategoryFilters(param: {
        id: string;
    }): Promise<{
        colors: (import("../product/models/color.model").Color & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        materials: (import("../product/models/material.model").Material & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        sizes: (import("../product/models/size.model").Size & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getColor(param: {
        slug: string;
    }): Promise<(import("../product/models/color.model").Color & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getMaterial(param: {
        slug: string;
    }): Promise<(import("../product/models/material.model").Material & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSize(param: {
        slug: string;
    }): Promise<(import("../product/models/size.model").Size & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createColor(dto: CreateFilterDto): Promise<import("../product/models/color.model").Color & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMaterial(dto: CreateFilterDto): Promise<import("../product/models/material.model").Material & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createSize(dto: CreateFilterDto): Promise<import("../product/models/size.model").Size & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateColor(dto: CreateFilterDto, param: {
        id: string;
    }): Promise<import("../product/models/color.model").Color & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMaterial(dto: CreateFilterDto, param: {
        id: string;
    }): Promise<import("../product/models/material.model").Material & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateSize(dto: CreateFilterDto, param: {
        id: string;
    }): Promise<import("../product/models/size.model").Size & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteColor(param: {
        id: string;
    }): Promise<void>;
    deleteMaterial(param: {
        id: string;
    }): Promise<void>;
    deleteSize(param: {
        id: string;
    }): Promise<void>;
}
