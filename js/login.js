document.getElementById('login-submit').addEventListener('click',function(){
   let emailField= document.getElementById('user-email');
   let userEmail=emailField.value;

//    console.log(userEmail);

   let passwordField= document.getElementById('user-password');
   let userPassword=passwordField.value;

   if(userEmail=='sontan@gmail.com'&& userPassword=='secret'){
       window.location.href='banking.html';
   }

});

