module.exports = class Machine {
    constructor() {
        this.items = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}]
    }

    checkInventory() {
        return this.items;
    }
};