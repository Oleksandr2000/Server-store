import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.model';
import { Color, ColorSchema } from 'src/product/models/color.model';
import { Material, MaterialSchema } from 'src/product/models/material.model';
import { Product, ProductSchema } from 'src/product/models/product.model';
import { Size, SizeSchema } from 'src/product/models/size.model';

@Module({
    providers: [CategoryService],
    controllers: [CategoryController],
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
    ],
})
export class CategoryModule {}
