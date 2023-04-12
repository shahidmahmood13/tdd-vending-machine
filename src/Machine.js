module.exports = class Machine {
  static amount = 0;
  constructor() {
    this.item = [
      { name: "crisps", price: 100 },
      { name: "chocolate", price: 350 },
      { name: "mints", price: 500 },
    ];

    //  this.AcceptedAmount=[10,20,50,100,500,1000];
  }

  seeSelections() {
    return this.item;
  }

  deposit(depositAmount) {
    let arr = [10, 20, 50, 100, 500, 1000];

    if (!arr.includes(depositAmount)) {
      return "NOt Acceptable amount";
    }

    Machine.amount += depositAmount;
    let a = `You have deposited Rs ${Machine.amount}`;

    return a;
  }

  //  4th test case /

  selectItem(itemName, Amountdeposit) {
    let checkmark = true;
    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i].name == itemName) {
        let amountTOPay = this.item[i].price - Amountdeposit;
        return `Your deposit is insufficient.  Please add Rs ${amountTOPay} for this item`;
      } else {
        checkmark = false;
      }
    }
    if (checkmark == false) {
      return "The item you selected is unavailable";
    }
  }



  
};
