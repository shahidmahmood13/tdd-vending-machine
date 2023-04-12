module.exports = class Machine {
    constructor() {
this.item= [{name: 'crisps',price: 100 },
{name: 'chocolate' ,price:350 },
 {name : "mints", price:70 }];
 this.AcceptedAmount=[10,20,50,100,500,1000];

    }

    seeSelections() {
    return this.item;
    }

    deposit(Amount){
        AcceptedAmount.forEach(element => {
            if (element === Amount){
                return `You have deposited Rs ${Amount}`
            }
        });


    }
   
};