import { UserService } from './services/user-service';
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Task } from './task/task';
import { User } from './user/user';
import { UserData } from './models/user.model';

@Component({
  selector: 'app-root',
  imports: [Header, Task, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users: UserData[] = [];

  constructor(public userService: UserService) {
    this.users = this.userService.users();
  }

  get userName(): string {
    return this.userService.getSelectedUser()?.name || '';
  }
}
