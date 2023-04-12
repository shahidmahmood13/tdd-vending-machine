module.exports = class Machine {

    static amount ;
  constructor() {
    this.item = [
      { name: "crisps", price: 100 },
      { name: "chocolate", price: 350 },
      { name: "mints", price: 70 },
    ];

    //  this.AcceptedAmount=[10,20,50,100,500,1000];
  }

  seeSelections() {
    return this.item;
  }


  deposit(depositAmount) {
    
    let EnterAmount="Amount not Acceptable";
    let arr = [10, 20, 50, 100, 500, 1000];

    arr.forEach((element) => {
      if (element === depositAmount) {
        EnterAmount = `You have deposited Rs ${depositAmount}`;
        }

    });
    return EnterAmount;
  }
};
