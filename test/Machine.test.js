const Machine = require("../src/Machine");

describe("the vending machine", () => {

  it("should have items to purchase", () => {
    // setup
    const machine = new Machine();
    const expected = [{name: 'crisps',price: 100 },
     {name: 'chocolate' ,price:350 },
      {name : 'mints', price:500 }];

    // exercise
    const result = machine.seeSelections();

    // assert
    expect(result).toEqual(expected);

  });

it("how mush Amout i deposit",()=>{
    // Setup
    const machine = new Machine(500);
    const expected ="You have deposited Rs 500";
    const depositAmount = 500;
    // Act
    const result = machine.deposit(depositAmount);
    // Assert
    expect(result).toBe(expected);


})

it("Add more Amount",()=>{
    const machine = new Machine();
    const expected ="You have deposited Rs 600";
const AddMoreAmount = 100;
// actt
const result = machine.deposit(AddMoreAmount);
// Assert 
expect(result).toBe(expected);

})

it("UNavaiable item", ()=>{

const machine= new Machine();
const expected= undefined;
const itemName = "lays"
const Amountdeposit=10;
// Act
const result = machine.selectItem(itemName,Amountdeposit)
// Assert
expect(result).toBe(expected);

})



it("Your deposit is insufficient . Add more amount",()=>{
    const machine = new Machine();
    const expected ="Your deposit is insufficient.  Please add Rs 400 for this item"
    let itemName = 'mints';
    let Amountdeposit=100;
    const result = machine.selectItem(itemName, Amountdeposit);

    expect(result).toBe(expected)

})

it("I want to receive change. Add more amount",()=>{
    const machine = new Machine();
    const expected ="chocolate change:[400,50]"
    let itemName = 'chocolate';
    let Amountdeposit=400;
    const result = machine.selectItem(itemName, Amountdeposit);

    expect(result).toBe(expected)

});
it("total deposit amount return", () => {
    let machine =  new Machine();
    let expected = "The total deposit amount  is 600" ;
    let result= machine.cancel();
    expect(result).toBe(expected)

})


    it("Add more AmountCannot return proper change",()=>{
        const machine = new Machine();
        const expected ="Remining amount: 600 Rs. Cannot return proper change.  Please choose another item or cancel the transaction "
         let itemName = "crisps";
        let Amountdeposit=700;
        const result = machine.selectItem(itemName, Amountdeposit);
    
        expect(result).toBe(expected)
    
    });




});
