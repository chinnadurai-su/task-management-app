import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskItem } from '../../models/task-item.model';
import { Card } from '../../shared/card/card';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-individual-task',
  imports: [Card, DatePipe],
  templateUrl: './individual-task.html',
  styleUrl: './individual-task.css',
})
export class IndividualTask {
  private taskService = inject(TaskService);
  @Input({ required: true }) addedTask!: TaskItem;

  onTaskComplete() {
    this.taskService.completeTask(this.addedTask.id);
  }
}
