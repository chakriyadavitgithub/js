let goToGoa = (success,failure)=>{

    let acc_Bal=100;
    if(acc_Bal >=15000){
        success(" Enjoy")
    }
    else{
        failure("ROOM")
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})