class Account{
    Acc_ID;
    Acc_Name;
    Acc_Bal;
    constructor(id,name,amount){
        this.Acc_ID=id;
        this.Acc_Name=name;
        this.Acc_Bal=amount;
    }

}
let a1=new Account(101,'sony',5000);
let a2=new Account(102,'raju',10000);
let a3=new Account(103,'priya',6000);
console.log(a1)
console.log(a2)
console.log(a3)