import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import helmet from '@fastify/helmet';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.register(helmet);

  const url: string = 'localhost';
  const port: number = 3000;

  await app.listen(port, (): void => {
    console.log(`Host: ${url}`);
  });
}

const start: number = new Date().getTime();

bootstrap().then((): void => {
  const end: number = new Date().getTime();
  console.log(`SecondWay: ${end - start}ms`);
});
