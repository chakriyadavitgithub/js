class Account{
   // acc_Id;
    //acc_Name;
    //acc_Bal;
    constructor(id,name,amount,min_Bal) {
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
        this.min_Balance=min_Bal
    }
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal-amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Balance
    }
    close_Account(){
        console.log("Account Closed Successfully!")
    }
}

let a1=new Account(1314,'chakri',10000,500)
a1.deposit_Amount(500)
a1.deposit_Amount(400)
console.log(a1)
console.log(a1.get_Bal())

a1.withdrawl_Amount(5000)
console.log(a1)
console.log(a1.get_Bal())

let a2=new Account(206,'sandy',20000,500)
a2.deposit_Amount(4000)
console.log(a2)
console.log(a2.get_Bal())

