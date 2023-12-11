import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  activeUsers: string[];
  totalActivations: number;

  constructor(private userService: UserService) {
    this.activeUsers = this.userService.getActiveUsers()
    this.totalActivations = this.userService.activations
  }
  
  onSetToInactive(user: string) {
    this.userService.inactivateUser(user)
  }
}
