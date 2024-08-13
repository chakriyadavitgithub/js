class Account{
    open_Account(){
        console.log("Account opened")
    }
    depoist_Amount(){
        console.log("Amount depoist")
    }
    withdrawal_Amount(){
        console.log("insufficent Balance")
    }
    get_Bal(){
        console.log("server busy")
    }
    get_statement(){
        console.log("pay 50 INR")
    }
    close_Account(){
        console.log("-ve Bal")
    }
}
let a1= new Account();
 a1.open_Account()
 a1.depoist_Amount()
 a1.withdrawal_Amount()
 a1.get_Bal()
 a1.get_statement()
 a1.close_Account()