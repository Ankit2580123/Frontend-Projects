let textbox=document.getElementById("textbox");
textbox.addEventListener("input",function(){
                    let text=this.value;
                    let char=text.length;
                    /*Display in html page total characters*/ 
                    document.getElementById("char").innerHTML=char;

                    /*For trim the extra space before and after of words*/
                    text=text.trim();

                    /*Break into arrays when space occurs between two words*/ 
                    let word=text.split(" ")

                    /*Filtering the elements and remove extra space in our new list*/ 
                    let newCleanList=word.filter(function(elm){
                                        return elm !=" ";
                    });
                   
                    document.getElementById("words").innerHTML=newCleanList.length;
                    
})