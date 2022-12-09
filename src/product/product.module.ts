import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './models/product.model';
import { ProductService } from './product.service';
import { Color, ColorSchema } from './models/color.model';
import { Material, MaterialSchema } from './models/material.model';
import { Size, SizeSchema } from './models/size.model';
import { Category, CategorySchema } from '../category/category.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
        MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
        MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }]),
        MongooseModule.forFeature([{ name: Material.name, schema: MaterialSchema }]),
        MongooseModule.forFeature([{ name: Size.name, schema: SizeSchema }]),
    ],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule {}
