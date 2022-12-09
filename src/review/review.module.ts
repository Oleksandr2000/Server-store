import { Module } from '@nestjs/common';
import { ReviewsService } from './review.service';
import { ReviewsController } from './review.controller';
import { Review, ReviewSchema } from './review.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])],
    providers: [ReviewsService],
    controllers: [ReviewsController],
})
export class ReviewsModule {}
