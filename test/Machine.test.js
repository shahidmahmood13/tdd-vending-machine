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

    it('should notify me when my selection is unavailable', () => {
        // setup
        const machine = new Machine();
        const expected = 'The item you selected is unavailable';

        // exercise
        const actual = machine.selectItem(2);

        // assert
        expect(actual).to.equal(expected);
    });

    it('should notify me when my deposit is insufficient', () => {
        // setup
        const machine = new Machine();
        const expected = 'Your deposit is insufficient.  Please add Rs 20 for this item';
        machine.totalDeposit = 50;

        // exercise
        const actual = machine.selectItem(3);

        // assert
        expect(actual).to.equal(expected);
    });

    it('should vend item and make change', () => {
        // setup
        const machine = new Machine();
        machine.totalDeposit = 100;
        const expected = {item: 'mints', change: [20, 10]};

        // exercise
        const actual = machine.selectItem(3);

        // assert
        expect(actual).to.deep.equal(expected);
    });

    it('should return money when cancel btn is pressed', () => {
        // setup
        const machine = new Machine();
        machine.totalDeposit = 100;
        const expected = {change: [100]};

        // exercise
        const actual = machine.cancel();

        // assert
        expect(actual).to.deep.equal(expected);
    });
});
