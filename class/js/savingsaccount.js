
class SavingsAccount extends Account {
    
    constructor(number,interest) {
        super(number);
        this.interest = interest; 
    }

    get interest() {
        return this._interest;
    }

    set interest(interest) {
        if (interest < 0) throw new Error('Negative interest is not allowed')
        this._interest = interest;
    }

    addInterest() {
        let amount = this.getBalance() * this._interest * 100;
        this.interest = this.deposit(amount);
    }

    toString() {
        return super.toString() + ` interest ${this.interest}`;
    }

    endOfMonth() {
        this.addInterest();
        return `interst added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()}`;
    }
}