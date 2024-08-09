function validate(){
 //alert('pls fill the above details')
let username=document.getElementById('username').value;
let password=document.getElementById('password').value;

if (username === ''){
  alert('please enter the user name')
  //we want to update the span tag
  document.getElementById('unMsg').innerHTML="please enter name"
}
if (password === ''){
  //alert('please enter the password')
  /// and here also we want to update the span tag
  document.getElementById('upMsg').innerHTML="please enter password"
}
console.log({name:username,password:password})
return true; /// and here true statement also we can use
}
