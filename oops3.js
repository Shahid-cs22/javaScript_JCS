class BankAccount {
    #balance = 0; // private field

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100); 
console.log(account.getBalance()); 
