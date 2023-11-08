import { Injectable } from '@nestjs/common';
import CounterDateEntity from './counter-date.entity';
import PrismaService from 'src/prisma.service';

@Injectable()
export default class CounterRepository {
  constructor(private prisma: PrismaService) {}

  async getLastDate() {
    const lastDate = (await this.prisma.date.findFirst()).date;
    return lastDate.getTime();
  }

  async updateLastDate(dateTime: CounterDateEntity) {
    const date = this.hoursToZero(dateTime.date);
    const existingDate = await this.prisma.date.findFirst();

    if (existingDate) {
      await this.prisma.date.update({
        where: {
          id: existingDate.id,
        },
        data: {
          date,
        },
      });

      return;
    }

    await this.prisma.date.create({
      data: {
        date,
      },
    });
  }

  async getActualDate() {
    return this.hoursToZero(new Date()).getTime();
  }

  private hoursToZero(date: Date) {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }
}
