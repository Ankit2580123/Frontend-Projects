const PasswordBtn=document.getElementById('PasswordBtn');
const input=document.getElementById('Password');

const copy=document.getElementById('logo');

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const length=12;
const digit="0123456789";
const symbol="!@#$%^&*()?-=+/";


PasswordBtn.addEventListener('click',function(){
                    let Password="";
                    while(Password.length<length){
                                        Password+=upperCase[Math.floor(Math.random()*upperCase.length)];
                                        Password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
                                        Password+=digit[Math.floor(Math.random()*digit.length)];
                                        Password+=symbol[Math.floor(Math.random()*symbol.length)];
                    }
                    input.value=Password;
                   
});
copy.addEventListener('click',function(){
                    input.select();
                    document.execCommand("copy");
});