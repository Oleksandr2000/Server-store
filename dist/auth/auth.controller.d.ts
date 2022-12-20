import { AuthService } from './auth.service';
import { UserDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: UserDto): Promise<{
        user: {
            email: string;
            name: string;
            password: string;
            number: number;
            role: string;
            _id: any;
            __v?: any;
            $locals: Record<string, unknown>;
            $op: "remove" | "save" | "validate";
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            modelName: string;
            schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
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
}
