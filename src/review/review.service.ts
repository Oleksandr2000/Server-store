import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './review.model';

@Injectable()
export class ReviewsService {
    constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) {}
}
