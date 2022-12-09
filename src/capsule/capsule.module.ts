import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CapsuleController } from './capsule.controller';
import { CapsuleService } from './capsule.service';
import { Capsule, CapsuleSchema } from './model/capsule.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: Capsule.name, schema: CapsuleSchema }])],
    providers: [CapsuleService],
    controllers: [CapsuleController],
})
export class CapsuleModule {}
