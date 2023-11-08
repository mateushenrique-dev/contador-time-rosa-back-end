import { Module } from '@nestjs/common';
import CounterController from './counter.controller';
import CounterRepository from './counter.repository';
import PrismaService from 'src/prisma.service';

@Module({
  controllers: [CounterController],
  providers: [CounterRepository, PrismaService],
})
export default class CounterModule {}
