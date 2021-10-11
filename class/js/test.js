
describe('GetNumber', () => {

    let accountNumber = 100;
    let account = new Account(accountNumber);

    it(`Account number is ${accountNumber}`, function () {
        assert.equal(account.getNumber(), accountNumber);
    });
})

describe('GetBalance', () =>  {

    let account = new Account(100);

    it('Account balance is 0.0', () => {
        assert.equal(account.getBalance(), 0.0);
    });
})

describe('Deposit', () =>  {

    let account = new Account(100);
    let amount = 2500.0;
    account.deposit(amount);

    it(`After depositing ${amount} to fresh account, balance is ${amount}`, function () {
        assert.equal(account.getBalance(), amount);
    })

    it(`Trying to deposit a negative number fails`, () => {
        assert.throws(() => account.deposit(-10), RangeError, 'Deposit amount has to be greater than zero');
    });
})

describe('Withdraw', () =>  {

    let account = new Account(100);
    let balance = 5000.0;
    let amount = 300.0;

    account.deposit(balance);
    account.withdraw(amount);

    it(`After withrawing ${amount} from an accoun with ${balance} blance, the new balanace is ${balance-amount}`, () => {
        assert.equal(account.getBalance(), balance - amount);
    });

    it('Trying to withdraw more than available balance fails', () => {
        assert.throws(() => account.withdraw(10000.0), Error, 'Insufficient funds');
    });

    it('Trying to withdraw negative amount fails', () =>  {
        assert.throws(() => account.withdraw(-10), RangeError, 'Withdraw amount has to be greater than zero');
    });
});

describe('ToString', () => {

    let accountNumber = 100;
    let accountBalance = 2300;
    let account = new Account(accountNumber);
    account.deposit(accountBalance)

    let expected = `Account ${accountNumber}: balance ${accountBalance}`;

    it(`Printing account displays '${expected}'`, () => {
        assert.equal(account.toString(), expected);
    })
});

describe('GetInterest', () => {

    let interestRate = .05;
    let account = new SavingsAccount(101, interestRate);

    it(`Interest rate is ${interestRate}`, () => {
        assert.equal(account.interest, interestRate);
    });
})


describe('SetInterest', () => {

    let interestRate = .05;
    let newRate = .06;
    let account = new SavingsAccount(101, interestRate);
    account.interest = newRate;

    it(`New interset rate is ${newRate}`, () => {
        assert.equal(account.interest, newRate);
    })

    it(`Trying to set negative interest rate fails`, () => {
        assert.throws(() => {account.interest = -.5}, Error, 'Negative interest is not allowed');
    })
})

describe('SavingsAccount.toString', () => {

    let rate = .08;
    let account = new SavingsAccount(101, rate);
    let expected = `Account ${account.getNumber()}: balance ${account.getBalance()} interest ${account.interest}`;

    it(`Printing savings account displays ${expected}`, () => {
        assert.equal(account.toString(), expected);
    })
});

describe('CheckingAccount.withdraw', () => {

    let limit = 100;
    let balance = 500;
    let amount = 550;

    let account = new CheckingAccount(102, limit);
    account.deposit(balance);

    account.withdraw(amount);

    it(`For ${limit} overdraft limit, a balance of ${balance - amount} is acceptable`, () => {
        assert.equal(account.getBalance(), balance - amount);
    })

    it(`Trying to withdarw more than the overdraft limit fails`, () => {
        assert.throws(() => account.withdraw(100), Error, 'Max overdraft');
    })

})

describe('CheckingAccount.toString', () => {

    let limit = 500;
    let account = new CheckingAccount(102, limit);
    let expected = `Account ${account.getNumber()}: balance ${account.getBalance()} overdraft limit ${account.overdraftLimit}`;

    it(`Printing checking account displays ${expected}`, () => {
        assert.equal(account.toString(), expected);
    })
})

    
describe("BankAccounts.accountNumber", () => {

    let bank = new Bank();
    bank.addAccount();
    bank.addAccount();
    bank.addAccount();

    let count = bank.accounts.length;

    it(`After adding 3 acounts, the number of account is 3`, () => {
        assert.equal(count, 3);
    })

    it(`After adding 3 accounts, the account number of the last account is 3`, () => {
        assert.equal(bank.accounts[2].getNumber(), 3);
    })
})

describe("BankAccounts.closeAccount", () => {

    let bank = new Bank();
    bank.addAccount();
    bank.addSavingsAccount(.05);
    bank.addCheckingAccount(400);
    bank.closeAccount(bank.accounts[0].getNumber());

    let count = bank.accounts.length;

    it(`After adding 3 accounts and closing the first one, there are only 2 accounts left`, () => {
        assert.equal(count, 2);
    })
})

describe('BankAccounts.report', () => {

    let bank = new Bank();
    bank.addAccount();
    bank.addSavingsAccount(.05);
    bank.addCheckingAccount(400);

    let expected = `${bank.accounts[0].toString()}\n${bank.accounts[1].toString()}\n${bank.accounts[2].toString()}`

    console.log(bank.accountReport());

    it(`Bank report looks like '${expected}'`, () => {
        assert.equal(expected, bank.accountReport());
    })
})


describe('EndOfMonth', () => {

    let bank = new Bank();
    bank.addSavingsAccount(.05);
    bank.addCheckingAccount(400);

    bank.accounts[0].deposit(100);
    bank.accounts[1].withdraw(200);

    
    let expected = `Interest added SavingsAccount ${bank.accounts[0].getNumber()}: balance: ${bank.accounts[0].getBalance()} interest: ${bank.accounts[0].interest}` 
        + `Warning, low balance CheckingAccount ${bank.accounts[1].getNumber()}: balance: ${bank.accounts[1].getBalance()} overdraft limit: ${bank.accounts[1].overdraftLimit}`

    it(`End of month report looks like '${expected}'`, () => {
        bank.endOfMonth();
    })
})
