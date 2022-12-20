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
import { Model } from 'mongoose';
import { UserDocument } from './auth.model';
import { UserDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    registration(dto: UserDto): Promise<{
        user: {
            email: string;
            name: string;
            password: string;
            number: number;
            role: string;
            _id: any;
            __v?: any;
            $locals: Record<string, unknown>;
            $op: "remove" | "validate" | "save";
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            modelName: string;
            schema: import("mongoose").Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
                [x: string]: any;
            }>;
        };
        token: string;
    }>;
    login(dto: UserDto): Promise<{
        user: {
            name: string;
            email: string;
            number: number;
            role: string;
        };
        token: string;
    }>;
    private generateToken;
}
