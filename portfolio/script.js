/*Navbar scroll behaviour Change*/ 
$(document).ready(function(){
                    $(window).scroll(function(){
                                        if(this.scrollY>20)
                                        {
                                                            $('.navbar').addClass("sticky");
                                        }
                                        else{
                                                            $('.navbar').removeClass("sticky");
                                        }
                    });

                    /*Navbar Menu Scripts*/
                    $('.menu-btn').click(function(){
                                        $('.navbar .menu').toggleClass("active");
                                        $('.menu-btn i').toggleClass("active");
                    });
                    
});

/*Typing animation script*/

var typed = new Typed(".typing", {
                    strings: ["Frontend Developer.", "Programmer."],
                    typeSpeed:120,
                    backSpeed:60,
                    loop:true
});


/*Theme Scripts*/

function changeCol(col){
                    let text=document.getElementsByClassName('txt');

                    if(col=='#00b4d8')
                    {
                                        for(let elm of text){
                                                            elm.style.color='#00b4d8'
                                        }
                    }
                    if(col=='#fb5607'){
                                        for(let elm of text){
                                                           
                                                            elm.style.color='#fb5607'
                                        }    
                    }
                    if(col=='#d90429'){
                                        for(let elm of text){
                                                           
                                                            elm.style.color='#d90429'
                                        }    
                    } 
}     
