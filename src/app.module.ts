import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CollectionModule } from './collection/collection.module';
import { CapsuleModule } from './capsule/capsule.module';
import { FilterModule } from './filter/filter.module';
import { BasketModule } from './basket/basket.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.development.env',
            isGlobal: true,
        }),
        MongooseModule.forRoot(String(process.env.DB_URL)),
        AuthModule,
        ProductModule,
        CategoryModule,
        CollectionModule,
        CapsuleModule,
        FilterModule,
        BasketModule,
        FavoriteModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
