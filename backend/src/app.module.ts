import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, PrismaService],
  providers: [AppService, PrismaService],
})
export class AppModule {}
