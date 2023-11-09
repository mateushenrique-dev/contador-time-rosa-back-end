/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put } from '@nestjs/common';
import CounterRepository from './counter.repository';
import CreateCounterDateDTO from './counter-date.dto';
import CounterDateEntity from './counter-date.entity';

@Controller()
export default class CounterController {
  constructor(private counterRepository: CounterRepository) {}

  @Get('/')
  async getDaysPassed() {
    const lastDate = await this.counterRepository.getLastDate();
    const today = this.counterRepository.getActualDate();
    const diferenceBetweenDates = (today - lastDate);
    const dayInMilisseconds = (1000 * 60 * 60 * 24);

    const daysPassed = (diferenceBetweenDates / dayInMilisseconds);

    return {
      daysPassed
    };
  }

  @Put("/")
  async setNewDate(@Body() { date }: CreateCounterDateDTO) {
    const counterDateEntity = new CounterDateEntity(date);
    await this.counterRepository.updateLastDate(counterDateEntity);
  }
}
