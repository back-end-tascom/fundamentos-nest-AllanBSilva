import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

describe('StudentController', () => {
  let controller: StudentController;
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentService],
    }).compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a student', () => {
    const studentData = { name: 'George', age: 30, course: 'Engenharia' };
    const result = controller.createStudent(studentData);
    expect(result).toHaveProperty('id');
    expect(result.name).toEqual(studentData.name);
  });

  it('should return all students', () => {
    const students = controller.getAllStudents();
    expect(students).toBeInstanceOf(Array);
  });

});
