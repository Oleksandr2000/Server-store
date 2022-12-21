export declare class filterProductDto {
    category: string;
    colors?: string;
    sizes?: string;
    materials?: string;
    minPrice?: number;
    maxPrice?: number;
    hit?: boolean;
    sale?: boolean;
    skip?: number;
    limit?: number;
    sort?: {
        field: string;
        value: any;
    };
    term?: string;
}
