export class UserService {
  activeUsers: string[]
  inactiveUsers: string[]
  count: {
    activations: number,
    inactivations: number
  }

  constructor() {
    this.activeUsers = ['Maria', 'Robert']
    this.inactiveUsers = ['Chris', 'David']
    this.count = {
      activations: 0,
      inactivations: 0
    }
  }

  activateUser(user: string) {
    if (this.inactiveUsers.some(u => u === user)) {
      const index = this.inactiveUsers.indexOf(user)
      this.inactiveUsers.splice(index, 1)
    }
    if (!this.activeUsers.some(u => u === user)) {
      this.activeUsers.push(user)
    }
    this.count.activations++
  }

  inactivateUser(user: string) {
    if (this.activeUsers.some(u => u === user)) {
      const index = this.activeUsers.indexOf(user)
      this.activeUsers.splice(index, 1)
    }
    if (!this.inactiveUsers.some(u => u === user)) {
      this.inactiveUsers.push(user)
    }
    this.count.inactivations++
  }

  getActiveUsers(): string[] {
    return this.activeUsers
  }

  getInactiveUsers(): string[] {
    return this.inactiveUsers
  }
}