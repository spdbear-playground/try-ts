class SimLockPhone {
  readonly carrier: string;
  constructor(carrier: string) {
    this.carrier = carrier;
  }
  // クラスのメソッドでも書き換えられない
  // changeToAu() {
  //   this.carrier = "au";
  // }
}

const myPhone = new SimLockPhone("Docomo");
// 書き換えられない
// myPhone.carrier = "au";

class BankAccount {
  constructor(private readonly accountNumber: number) {}
  getNumber() {
    return this.accountNumber;
  }
}
const myAccount = new BankAccount(123456);
console.log(myAccount.getNumber());
