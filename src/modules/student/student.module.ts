import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import sequelize, { Model } from 'sequelize';


@Module({
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
