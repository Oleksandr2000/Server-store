import { FindProductDto } from 'src/product/dto/find-product.dto';
import { TopPage } from './top-page.model';
import { TopPageModule } from './top-page.module';
export declare class TopPageController {
    create(dto: TopPage): Promise<void>;
    get(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    update(id: string, dto: TopPageModule): Promise<void>;
    find(dto: FindProductDto): Promise<void>;
}
