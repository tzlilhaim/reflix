import User from "./User"

class Account {
  constructor() {
    this.users = []
    this.colors = [
      { name: "red", isUsed: false },
      { name: "blue", isUsed: false },
      { name: "yellow", isUsed: false },
      { name: "green", isUsed: false },
    ]
    this.idTracker = 0
    this.maxAllowedUsers = 4
  }
  getRandmonUserColor() {
    const availableColors = this.colors.filter((c) => c.isUsed === false)
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)]
    return randomColor.name
  }
  addUserToAccount(name) {
    if (this.users.length < this.maxAllowedUsers) {
      const id = this.idTracker
      const color = this.getRandmonUserColor()
      const user = new User(id, name, color)
      this.users.push(user)
      this.idTracker++
      this.colors.find((c) => c.name === color).isUsed = true
    } else {
      //return "Reached max amount of users"
    }
  }
}

// Instanciation
const account = new Account()
account.addUserToAccount("Aurora")
account.addUserToAccount("Cinderella")
account.addUserToAccount("Ariel")
account.addUserToAccount("Belle")

export default account
