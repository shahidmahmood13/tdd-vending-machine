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



});
