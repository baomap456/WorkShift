import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   🚀 WorkShift Server is running!                    ║
║                                                       ║
║   📡 Local:   http://localhost:${port}                   ║
║   🌍 Network: http://your-ip:${port}                     ║
║                                                       ║
║   📝 Environment: ${process.env.NODE_ENV || 'development'}                    ║
║   ⚡ Ready to handle requests                        ║
║                                                       ║
╔═══════════════════════════════════════════════════════╗
  `);
}
bootstrap();
