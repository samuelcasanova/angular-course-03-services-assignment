import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  inactiveUsers: string[]
  count: {
    inactivations: number
  }
  
  constructor(private userService: UserService) {
    this.inactiveUsers = this.userService.getInactiveUsers()
    this.count = this.userService.count
  }

  onSetToActive(user: string) {
    this.userService.activateUser(user)
  }
}
