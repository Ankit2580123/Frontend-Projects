let flag=0;
function controller(x){
                    flag=flag+x;
                    showSlider(flag);
}
showSlider(flag)
function showSlider(num){
                    let slides=document.getElementsByClassName('slider');


                    if(num==slides.length){
                                        flag=0;
                                        num=0;
                    }
                    else if(num<0){
                                        flag=slides.length-1;
                                        num=slides.length-1;
                    }
                    /*hide all other images*/
                    for(let img of slides){
                                        img.style.display="none";
                    } 
                    //*Display a Single Image Initial */
                    slides[num].style.display="block"
}