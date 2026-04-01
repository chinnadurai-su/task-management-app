import { TaskService } from './../services/task-service';
import { Component, inject, Input } from '@angular/core';
import { IndividualTask } from './individual-task/individual-task';
import { TaskItem } from '../models/task-item.model';
import { AddNewTask } from './add-new-task/add-new-task';

@Component({
  selector: 'app-task',
  imports: [IndividualTask, AddNewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  private taskService = inject(TaskService);
  newDialogVisible: boolean = false;
  @Input({ required: true }) taskUser: string = '';
  @Input({ required: true }) userName: string = '';

  closeNewDialog(visible: boolean) {
    this.newDialogVisible = visible;
  }

  get filteredTasks(): TaskItem[] {
    return this.taskService.tasksForUser(this.taskUser);
  }

  addTask() {
    this.newDialogVisible = true;
  }
}
