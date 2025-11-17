const account = {
    accountName: "Priyanka",
    balance: 5000,
    getBalance: function () {
        console.log('Your balance is: ' + this.balance);
    },
    deposit: function (depositAmount) {
        this.balance += depositAmount;
        console.log('Deposited: ' + depositAmount);
    },
    withdrawal: function (withdrawalAmount) {
        if (withdrawalAmount <= this.balance){
            console.log('Withdrawal Amount: ' + withdrawalAmount)
            this.balance -= withdrawalAmount;

        }
            else {
                console.log('Insufficient Balance')
            }
        },
    getAccountName: function (){
        console.log('Account Name: ' + this.accountName);
    },
    accountError: function (errormessage){
        console.log('Error: ' + errormessage);
    }
    
};
account.deposit(2500);
account.withdrawal(1200);
account.getBalance();
console.log(account);