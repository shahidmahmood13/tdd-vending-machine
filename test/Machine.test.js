const Machine = require("../src/Machine");

describe("the vending machine", () => {

  it("should have items to purchase", () => {
    // setup
    const machine = new Machine();
    const expected = [{name: 'crisps',price: 100 },
     {name: 'chocolate' ,price:350 },
      {name : 'mints', price:70 }];

    // exercise
    const result = machine.seeSelections();

    // assert
    expect(result).toEqual(expected);

  });

it("how mush Amout i deposit",()=>{
    // Setup
    const machine= new Machine();
    const expected ="You have deposited Rs 500";
    const depositAmount = 500;
    // Act
    const result = machine.deposit(depositAmount);
    // Assert
    expect(result).toBe(expected);


})


});
