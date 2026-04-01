import { Injectable } from '@angular/core';
import { TaskItem } from '../models/task-item.model';
import { NEW_TASKS } from '../new-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: TaskItem[] = [];
  constructor() {
    this.tasks = this.getTasks();
    const TASKS_STORAGE_KEY = 'task-manager.tasks';
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
    if (storedTasks) {
      const parsedTasks: TaskItem[] = JSON.parse(storedTasks);
      this.tasks = parsedTasks;
    }
  }
  getTasks(): TaskItem[] {
    return NEW_TASKS;
  }

  tasksForUser(userId: string): TaskItem[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addNewTask(task: TaskItem) {
    this.tasks.push(task);
    this.saveTasksToStorage();
  }

  completeTask(id: string) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.saveTasksToStorage();
  }

  private saveTasksToStorage() {
    const TASKS_STORAGE_KEY = 'task-manager.tasks';
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(this.tasks));
  }
}
