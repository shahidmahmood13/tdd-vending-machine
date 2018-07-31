const Machine = require('../src/Machine');
const expect = require('chai').expect;

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];

        // exercise
        const actual = machine.checkInventory();

        expect(actual).to.deep.equal(expected);
    })
});
