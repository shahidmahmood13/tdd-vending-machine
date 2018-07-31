## TDD Vending Machine

### Objectives:

- Give students feedback regarding their pairing behaviors
- Reinforce writing tests first
- Reinforce writing good tests - transparent box, SEAT pattern
- Reinforce the ‘refactor’ of red, green, refactor
- Reinforce frequent commits with good messages


### Setup

- Clone this repository
- `npm install`
- `npm test`

As a customer, I want to see that the vending machine has items, so that I can purchase them.
- Given that I approach the vending machine
- when I look at it,
- then I see items inside that I can buy
checkInventory() returns an array of objects with item and price:
[{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}]

As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
- Given I am using the vending machine, 
- when I insert money, 
- then I see the total I have deposited on a screen. ('You have deposited Rs 100')
10, 20, 50, 100, 500

As a customer, I want to see a message if my item is unavailable, so that I can make another choice.
- Given I am using the vending machine, 
- when I choose an item that is unavailable, 
- then I see a message that tells me to make a different choice.
selectItem(itemName) returns 'That item is unavailable'

As a customer, I want to see a message if my deposit is insufficient, so that I know to add more money.
- Given I have made a choice, 
- when I have not deposited enough money for that item, 
- then I see a message telling me how much more to deposit.

As a customer, I want to receive change, so that I don’t pay more than the item costs.
- Given I have made a selection, 
- when the item is delivered, 
- then I receive correct change (in correct monetary units)

As a customer, I want to receive my money back when I push the cancel button, so that I can change my mind.
- Given that I have deposited money,
- When I push the cancel button,
- Then I receive my money back

As a customer, I want to know if the vending machine can make change, so that I can cancel my choice.
- Given I have deposited money and selected a choice, 
- when the machine does not have correct change, 
- then I see a message

Methods:  
deposit(denomination) => totalDeposit  
selectItem(itemName) => item + change || insufficient funds msg || insufficient change msg || item not available msg  
cancel() => totalDepositReturned

