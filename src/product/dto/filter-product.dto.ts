export class filterProductDto {
    category: string;
    color: string[];
    sizes: string[];
    material: string[];
    minPrice: number;
    maxPrice: number;
    hit: boolean;
    sale: boolean;
    skip: number;
    limit: number;
    sort: {
        field: string;
        value: any;
    };
}
