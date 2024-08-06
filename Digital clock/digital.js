//document.getElementById('abc').innerHTML=Date()
//document.getElementById('abc').innerHTML=new Date().toLocaleDateString()
setInterval(function(){
    document.getElementById('abc').innerHTML=new Date().toLocaleTimeString()},1000)
