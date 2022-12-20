import { Review } from './review.model';
export declare class ReviewsController {
    create(dto: Review): Promise<void>;
    delete(id: string): Promise<void>;
    getByProduct(productId: string): Promise<void>;
}
