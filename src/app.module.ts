import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [ProductsModule, UserModule, FilesModule, CloudinaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
