class Account {
    constructor(accNo, accName, accType, accBal, minBal) {
        this.AccNo = accNo;
        this.AccName = accName;
        this.AccType = accType;
        this.AccBalance = accBal;
        this.AccMinBal = minBal;
    }
    get amt() {
        return `${this.AccBalance}`;
    }
    get show() {
        return `Account No: ${this.AccNo} Account Name: ${this.AccName} Account Type: ${this.AccType} Balance:${this.AccBalance} Minmum Balance:${this.AccMinBal}`;
        // if(id==this.AccNo){
        //     return `Account No: ${this.AccNo} Account Name: ${this.AccName} Account Type: ${this.AccType} Balance:${this.AccBalance} Minmum Balance:${this.AccMinBal}`;
        // }
        // else
        //     return 'Invalid id';
    }
}

class Transaction extends Account {
    constructor(accNo, accName, accType, accBal, minBal) {
        super(accNo, accName, accType, accBal, minBal);
    }
    withdraw(val) {
        return `Withdraw amt: ${val} Available amt: ${this.AccBalance - val}`;
    }
    deposit(val){
        return `Deposit amt: ${val} Available amt: ${this.AccBalance + val}`;
    }
}

let accounts = [];
let account = new Account(123456789, 'Ram', 'Saving', 50000, 1000);
accounts.push(account);
let account1 = new Account(12345557, 'Shyam', 'Current', 30000, 500);
accounts.push(account1);
console.log("Acount Created: ",accounts);
console.log("Available Balance: " , account.amt);
console.log("Account Details: " , account.show);

let tran = new Transaction(123456789, 'Ram', 'Saving', 50000, 1000);
console.log("====",tran);
let wdraw = tran.withdraw(100);
console.log(wdraw)
let deposit1 = tran.deposit(100);
console.log(deposit1);