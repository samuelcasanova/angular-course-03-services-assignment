import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  activeUsers: string[];
  count: {
    activations: number
  }

  constructor(private userService: UserService) {
    this.activeUsers = this.userService.getActiveUsers()
    this.count = this.userService.count
  }
  
  onSetToInactive(user: string) {
    this.userService.inactivateUser(user)
  }
}
