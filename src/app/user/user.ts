import { UserData } from '../models/user.model';
import { Component, inject, Input } from '@angular/core';
import { Card } from '../shared/card/card';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  private userService = inject(UserService);

  @Input() user!: UserData;
  @Input({ required: true }) selected!: boolean;

  get imagePath(): string {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.userService.selectUser(this.user.id);
  }
}
