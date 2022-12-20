import { Model } from 'mongoose';
import { Color, ColorDocument } from 'src/product/models/color.model';
import { Material, MaterialDocument } from 'src/product/models/material.model';
import { Size, SizeDocument } from 'src/product/models/size.model';
import { CreateFilterDto } from './create-filter.dto';
export declare class FilterService {
    private colorModel;
    private sizeModel;
    private materialModel;
    constructor(colorModel: Model<ColorDocument>, sizeModel: Model<SizeDocument>, materialModel: Model<MaterialDocument>);
    checkExistFilter(name: string, category: string, model: any): Promise<void>;
    getColor(slug: string): Promise<(Color & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getMaterial(slug: string): Promise<(Material & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSize(slug: string): Promise<(Size & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCategoryFilters(slug: string): Promise<{
        colors: (Color & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        materials: (Material & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        sizes: (Size & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getAllFilters(): Promise<{
        colors: (Color & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        materials: (Material & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    createColor(dto: CreateFilterDto): Promise<Color & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createSize(dto: CreateFilterDto): Promise<Size & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMaterial(dto: CreateFilterDto): Promise<Material & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateColor(dto: CreateFilterDto, _id: string): Promise<Color & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateSize(dto: CreateFilterDto, _id: string): Promise<Size & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMaterial(dto: CreateFilterDto, _id: string): Promise<Material & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteColor(_id: string): Promise<void>;
    deleteSize(_id: string): Promise<void>;
    deleteMaterial(_id: string): Promise<void>;
}
