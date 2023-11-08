/* eslint-disable prettier/prettier */
export default class CounterDateEntity {
  date: Date;
  
  constructor(date: string) {
    this.date = new Date(date);
  }
}
