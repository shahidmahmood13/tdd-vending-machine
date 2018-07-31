const Machine = require('../src/Machine');
const expect = require('chai').expect;

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];

        // exercise
        const actual = machine.checkInventory();

        // assert
        expect(actual).to.deep.equal(expected);
    });

    it('should tell me how much money I have deposited', () => {
        // setup
        const machine = new Machine();
        const expected = 'You have deposited Rs 100';

        // exercise
        const actual = machine.deposit(100);

        // assert
        expect(actual).to.equal(expected);
    });

    it('should calculate the correct total when I make another deposit', () => {
        // setup
        const machine = new Machine();
        const expected = 'You have deposited Rs 150';
        machine.totalDeposit = 50;

        // exercise
        const actual = machine.deposit(100);

        // assert
        expect(actual).to.equal(expected);
    });
});
