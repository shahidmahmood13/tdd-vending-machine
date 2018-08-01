const Item = require('./Item');

module.exports = class Machine {
    constructor() {
        this.totalDeposit = 0;
        this.inventory = [];
        const crisps = new Item('crisps', 100, 1);
        const choc = new Item('chocolate', 350, 2);
        const mints = new Item('mints', 70, 3);
        this.stockInventory(crisps, 3);
        this.stockInventory(choc, 0);
        this.stockInventory(mints, 1);
    }

    stockInventory(item, quantity) {
        this.inventory.push({
            item: item.name,
            price: item.price,
            code: item.code,
            quantity: quantity
        })
    }

    checkInventory() {
        return this.inventory.map(inventoryItem => {
            let newItemObj = {};
            newItemObj[inventoryItem.item] = inventoryItem.price;
            return newItemObj;
        });
    }

    deposit(currency) {
        this.totalDeposit += currency;
        return 'You have deposited Rs ' + this.totalDeposit;
    }

    makeChange(item) {
        const denominations = [500, 100, 50, 20, 10];
        let overpayment = this.totalDeposit - item.price;
        const change = [];
        denominations.map((denomination) => {
            let numOfBills = Math.floor(overpayment / denomination);
            for (let i = 0; i < numOfBills; i++) {
                change.push(denomination);
                overpayment = overpayment - denomination;
            }
        });
        return change;
    }

    selectItem(code) {
        const selectedItem = this.inventory.filter(inventoryItem => inventoryItem.code === code);
        if (selectedItem[0].quantity < 1) {
            return 'The item you selected is unavailable';
        } else if (selectedItem[0].price > this.totalDeposit) {
            const diff = selectedItem[0].price - this.totalDeposit;
            return 'Your deposit is insufficient.  Please add Rs ' + diff + ' for this item'
        } else {
            const change = this.makeChange(selectedItem[0]);
            return {item: selectedItem[0].item, change: change};
        }
    }

    cancel() {
        const change = this.makeChange({price: 0});
        return {change: change};
    }
};