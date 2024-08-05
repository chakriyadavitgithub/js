function changecolor1(){
    alert('test case 123')
    document.getElementById('btn1').style.backgroundColor="green"
}
function changecolor2(){
    alert('test case 123')
    document.getElementsByTagName('button')[1].style.backgroundColor="blue"
}
function changecolor3(){
    document.querySelector('.alia').style.backgroundColor="yellow"
}
function changecolor4(){
    document.getElementById('inputtag').style.background="red"
}
function changecolor5(){
    document.querySelector(".chakri").style.background="aqua"
}
function changecolor6(){
    let username=document.getElementById('blur').value;
     document.getElementById("blur").value=username.toUpperCase();
}