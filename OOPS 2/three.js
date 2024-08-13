class Account{
    acc_Bal=0;
    min_BAl=500;
    depoist_Amount(Amount){
        this.acc_Bal= this.acc_Bal+Amount

    }
    withdrawl_Amount(Amount){
        this.acc_Bal=this.acc_Bal -Amount

    }
    get_Bal(){

        return this.acc_Bal -this.min_BAl
    }
}
let a1= new Account();
a1.depoist_Amount(5000)
console.log(a1)
a1.withdrawl_Amount(150)
console.log(a1)

let a2= new Account();
a2.depoist_Amount(6000)
console.log(a2)
a2.withdrawl_Amount(2000)
console.log(a2)


let a3=new Account();
a3.depoist_Amount(50000)
console.log(a3)
a3.withdrawl_Amount(10000)
console.log(a3)
