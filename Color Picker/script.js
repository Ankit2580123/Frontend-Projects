let changeColor=function(){
                    let number = Math.floor(Math.random()*16777215);
                    let colorCode="#"+number.toString(16); //16 pass for conver hex code
                    document.body.style.background=colorCode;
                    document.getElementById("colorcode").innerHTML=colorCode;
                    document.getElementById("copycode").addEventListener('click',function(){
                                        navigator.clipboard.writeText(colorCode);
                    })
}
document.getElementById("btn").addEventListener('click',changeColor);
changeColor();