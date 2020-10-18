import Wallet from "./Wallet"

class User {
  constructor(id, name, color) {
    this.id = id
    this.name = name
    this.color = color
    this.rented = []
    this.wallet = new Wallet(8)
  }
}

export default User
