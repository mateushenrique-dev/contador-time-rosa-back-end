/* eslint-disable prettier/prettier */
import { IsDateString, IsString } from 'class-validator';

export default class CreateCounterDateDTO {
  
  @IsString()
  @IsDateString(undefined, {
    message: "Você deve enviar uma data válida! No formato yyyy-mm-dd"
  })
  date: string;

}
