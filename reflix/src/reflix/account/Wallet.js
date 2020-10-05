class AccountWallet {
  constructor(money) {
    this.money = money
  }
  purchase(price) {
    this.money -= price
  }
  getRefund(price) {
    this.money += price
  }
}

export default AccountWallet
