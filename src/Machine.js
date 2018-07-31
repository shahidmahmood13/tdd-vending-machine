module.exports = class Machine {
    constructor() {
        this.items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}]
        this.totalDeposit = 0;
    }

    checkInventory() {
        return this.items;
    }

    deposit(currency) {
        this.totalDeposit += currency;
        return 'You have deposited Rs ' + this.totalDeposit;
    }
};