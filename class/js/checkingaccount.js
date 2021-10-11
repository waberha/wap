
class CheckingAccount extends Account {
    
    constructor(number, overdraftLimit) {
        super(number);
        this.overdraftLimit = overdraftLimit;
    }

    set overdraftLimit(limit) {
        if (limit < 0) throw new RangeError('Negative limit is not allowed');
        this._overdraftLimit = limit;
    }

    get overdraftLimit() {
        return this._overdraftLimit;
    }

    withdraw(amount) {
        
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }

        let newBalance = this.getBalance() - amount;
        
        if (newBalance < (-1 * this.overdraftLimit)) {
            throw new Error('Max overdraft');
        }

        this._balance = newBalance;
    }

    toString() {
        return super.toString() + ` overdraft limit ${this.overdraftLimit}`;
    }

    endOfMonth() {
        let report = "";
        if (this.getBalance() <0) report = "Warning, low balance ";
        return report + `CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} limit: ${this.overdraftLimit}`
    }
}