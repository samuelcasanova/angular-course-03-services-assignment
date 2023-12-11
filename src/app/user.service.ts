export class UserService {
  activeUsers: string[]
  inactiveUsers: string[]
  private _activations = 0
  get activations() {
    return this._activations
  }
  private _inactivations = 0
  get inactivations() {
    return this._inactivations
  }

  constructor() {
    this.activeUsers = ['Maria', 'Robert']
    this.inactiveUsers = ['Chris', 'David']
  }

  activateUser(user: string) {
    if (this.inactiveUsers.some(u => u === user)) {
      const index = this.inactiveUsers.indexOf(user)
      this.inactiveUsers.splice(index, 1)
    }
    if (!this.activeUsers.some(u => u === user)) {
      this.activeUsers.push(user)
    }
    this._activations++
  }

  inactivateUser(user: string) {
    if (this.activeUsers.some(u => u === user)) {
      const index = this.activeUsers.indexOf(user)
      this.activeUsers.splice(index, 1)
    }
    if (!this.inactiveUsers.some(u => u === user)) {
      this.inactiveUsers.push(user)
    }
    this._inactivations++
  }

  getActiveUsers(): string[] {
    return this.activeUsers
  }

  getInactiveUsers(): string[] {
    return this.inactiveUsers
  }
}