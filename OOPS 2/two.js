class Account{
    acc_BAl=0;
    depoist_Amount(Amount){  
       /// console.log(Amount)
       ////here we using the (this) key word for inside only
        this.acc_BAl= this.acc_BAl+Amount

    }
}
////here the object will be the outside
let a1= new Account();
a1.depoist_Amount(5000)
console.log(a1)
let a2= new Account();
a2.depoist_Amount(15000)
console.log(a2)
let a3= new Account();
a3.depoist_Amount(3000)
console.log(a3)