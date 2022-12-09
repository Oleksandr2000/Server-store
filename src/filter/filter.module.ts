import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from 'src/product/models/color.model';
import { Material, MaterialSchema } from 'src/product/models/material.model';
import { Size, SizeSchema } from 'src/product/models/size.model';
import { FilterController } from './filter.controller';
import { FilterService } from './filter.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }]),
        MongooseModule.forFeature([{ name: Material.name, schema: MaterialSchema }]),
        MongooseModule.forFeature([{ name: Size.name, schema: SizeSchema }]),
    ],
    providers: [FilterService],
    controllers: [FilterController],
})
export class FilterModule {}
