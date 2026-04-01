import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserData } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private selectedUserId: string = '';

  users(): UserData[] {
    return DUMMY_USERS;
  }

  selectUser(id: string): string {
    this.selectedUserId = id;
    return DUMMY_USERS.find((user) => user.id === id)?.name || '';
  }

  getSelectedUserId(): string {
    return this.selectedUserId;
  }

  getSelectedUser(): UserData | undefined {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId);
  }
}
