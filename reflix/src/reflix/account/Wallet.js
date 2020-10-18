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
  isEnoughMoney(price) {
    return this.money - price >= 0
  }
}

export default AccountWallet
