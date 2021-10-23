import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async find(id: string): Promise<Task> {
    return this.taskService.find(id);
  }

  @Post()
  async create(@Body() taskProperty: CreateTaskDto) {
    return this.taskService.create(taskProperty);
  }
}
