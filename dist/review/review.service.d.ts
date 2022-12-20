import { Model } from 'mongoose';
import { Review } from './review.model';
export declare class ReviewsService {
    private reviewModel;
    constructor(reviewModel: Model<Review>);
}
