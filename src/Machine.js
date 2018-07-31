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

    selectItem(code) {
        const selectedItem = this.inventory.filter(inventoryItem => inventoryItem.code === code);
        if (selectedItem[0].quantity < 1) {
            return 'The item you selected is unavailable';
        }
    }
};