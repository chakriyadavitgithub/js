class parent{   //parent class and super class are same
    constructor(){
        console.log('parent class - constructor')
    }
    m1(){
        console.log('parent class - m1 method')
    }                       //but constructor are using the super class.
}
class child extends parent{        // child and derived class are same
    constructor(){
        super();              //// here invoke the super class byusing this keyword and we excetute
        console.log('child class- constructor method')
    }
    m2(){
        console.log('child class m2() method')
    }
}
let c1=new child();