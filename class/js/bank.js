
class Bank {

    static nextNumber = 1;
    static counter = 0;

    constructor() {
        this._accounts = [];
    }

    addAccount() {
        this._accounts.push(new Account(Bank.nextNumber));
        Bank.nextNumber ++;
        return Bank.counter++;
    }

    addSavingsAccount(interest) {
        this._accounts.push(new SavingsAccount(Bank.nextNumber, interest));
        Bank.nextNumber++;
        return Bank.counter++;
    }

    addCheckingAccount(overdraft) {
        this._accounts.push(new CheckingAccount(Bank.nextNumber, overdraft));
        Bank.nextNumber++;
        return Bank.counter++;
    }

    closeAccount(number) {
        let index = this._accounts.findIndex(a => a.getNumber() === number);
        if (index > -1) {
            this._accounts.splice(index, 1);
            return Bank.counter--;
        }
        return Bank.counter;
    }

    accountReport() {
        return this._accounts.reduce((acc, e) => acc.toString() + "\n" + e.toString());
    }

    get accounts() {
        return this._accounts;
    }

    endOfMonth() {
        return this._accounts.reduce((acc, e) => acc.endOfMonth() + '\n' + e.endOfMonth());
    }
}