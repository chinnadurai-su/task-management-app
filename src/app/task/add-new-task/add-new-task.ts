import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-add-new-task',
  imports: [FormsModule],
  templateUrl: './add-new-task.html',
  styleUrl: './add-new-task.css',
})
export class AddNewTask {
  private taskService = inject(TaskService);

  taskTitle: string = '';
  taskSummary: string = '';
  taskDueDate: string = '';
  @Input() userId: string = '';
  @Output() closeDialog = new EventEmitter<boolean>();

  onCreateTask() {
    const newTask: TaskItem = {
      id: 'task-' + Math.random().toString(36).substr(2, 9),
      userId: this.userId,
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDueDate,
    };
    this.taskService.addNewTask(newTask);
    this.onClose();
  }

  onClose() {
    this.closeDialog.emit(false);
  }
}
