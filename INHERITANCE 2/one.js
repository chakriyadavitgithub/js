class Account{
    acc_id;
    acc_name;
    constructor(id,name){
        this.acc_id=id
        this.acc_name=name
    }
}
class savingaccount extends Account{
    acc_bal=0;
    min_bal=500;
    constructor(id,name,amount){
    super(id,name)
    this.acc_bal=amount
    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }
}
class currentaccount extends Account{
    acc_bal=0;
    min_bal=1000;
    constructor(id,name,amount){
    super(id,name)
    this.acc_bal=amount
    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }
}

let SA1=new savingaccount(206,"chakri",6000)
console.log(SA1)
console.log(SA1.get_bal())

let CA1=new currentaccount(506,"virat",7000)
console.log(CA1)
console.log(CA1.get_bal())