// this is implict return
/*function get(){
    console.log(this)
}
get()*/
/// this key word will be excecute the empty {}

/// this function are over riding or hoisting
/*function wish(){
    console.log('chakri')
}
wish()
function wish(){
    console.log('zoya')
}
wish()*/

var wish=() =>{
    console.log('GA')

    }
    wish()


    var wish=() =>{
        console.log('GM')
    }
    wish()

