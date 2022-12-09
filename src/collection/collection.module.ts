import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { Collection, CollectionSchema } from './models/collection.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: Collection.name, schema: CollectionSchema }])],
    providers: [CollectionService],
    controllers: [CollectionController],
})
export class CollectionModule {}
