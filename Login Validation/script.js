let username=document.getElementById('username');
let password=document.getElementById('password');

let nameError=document.getElementById('nameError')
let passError=document.getElementById('passError')

let f=1;
/*Boolean return Function*/ 
function validate(){
                    if(username.value==""){
                                       nameError.innerHTML="Username is Empty!"
                                       f=0;
                    }
                    else if(username.value.length<3){
                                        nameError.innerHTML="Username Length must be 3! "
                                        f=0;
                    }
                    else{
                                        nameError.innerHTML=" ";
                                        f=1;
                    }
                    if(password.value=="")
                    {
                                        passError.innerHTML="Password is Empty!"
                                        f=0;
                    }
                    else{
                                        passError.innerHTML=" ";
                                        f=1;
                    }
                    if(f==1){
                                        return true;
                    }
                    else{
                                        returnfalse;
                    }
                    
}