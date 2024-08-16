/*class p{
    constructor(){
        console.log("GA")
    }
        /// with out constructor 
}
class c extends p{

}   
new c();*/

class p{
    constructor(){
        console.log("GA")
    }  /// with constructor & super 
}
class c extends p{
constructor(){
    super();
    console.log("GN")
}
}
new c();