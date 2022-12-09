import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewsModule } from './review/review.module';
import { CategoryModule } from './category/category.module';
import { CollectionModule } from './collection/collection.module';
import { CapsuleModule } from './capsule/capsule.module';
import { FilterModule } from './filter/filter.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.development.env',
            isGlobal: true,
        }),
        MongooseModule.forRoot(String(process.env.DB_URL)),
        AuthModule,
        TopPageModule,
        ProductModule,
        ReviewsModule,
        CategoryModule,
        CollectionModule,
        CapsuleModule,
        FilterModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
