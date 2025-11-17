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
    },

    exitAccount: function (){

            console.log('Thank you for using our ATM. Goodbye!');
            window.close
        } 
    
};

 
/*account.accountError( "Test error message");
account.exitAccount();
account.getAccountName();
account.deposit(2500);
account.withdrawal(1200);
account.getBalance();
console.log(account);
*/


function atm() {
    const message = parseFloat(
        prompt(" Select a choice 1.) See balance 2.)Make a Deposit 3.) Make a withdrawal 4.)Get account name 5.)Exit")
    )

    switch(message) {
        case 1:
            account.getBalance();
            break

        case 2:
            const depositAmount = parseFloat(prompt("Enter deposit amount: "));
            account.deposit(depositAmount);
            break;

        case 3:
            const withdrawalAmount = parseFloat(prompt("Enter withdrawal amount: "));
            account.withdrawal(withdrawalAmount);
            break;

        case 4:
            account.getAccountName();
            break;

        case 5:
            account.exitAccount();
            break;
        default:
            account.accountError("Invalid choice. Please try again.");
            break;
    }
}

atm();

