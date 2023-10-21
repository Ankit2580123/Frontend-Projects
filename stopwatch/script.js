let hrs=0
let min=0
let sec=0
let count=0

let timer=false
function start(){
                    timer=true;
                    stopwatch()

}
function Stop(){
                    timer=false;

}
function reset(){
                    timer=false;
                    count=0;
                    sec=0;
                    min=0;
                    hrs=0;
                
                                        document.getElementById('count').innerHTML="00";
                                        document.getElementById('sec').innerHTML="00";
                                        document.getElementById('min').innerHTML="00";
                                        document.getElementById('hrs').innerHTML="00";
}
function stopwatch()
{
                    if(timer==true){
                                        count=count+1;
                                        setTimeout('stopwatch()',10);
                                        if(count==100){
                                                            sec=sec+1;
                                                            count=0
                                        }
                                        if(sec==60){
                                                            min=min+1;
                                                            sec=0;
                                        }
                                        if(min==60){
                                                            hrs=hrs+1;
                                                            min=0;
                                                            sec=0;
                                        }

                    let countString=count;
                    let secString=sec;
                    let minString=min;
                    let hrsString=hrs;
                    if(hrs<10){
                                        hrsString="0"+hrsString;
                    }
                    if(min<10){
                                        minString="0"+minString;
                    }
                    if(sec<10){
                                        secString="0"+secString;
                    }
                    if(count<10){
                                        countString="0"+countString;
                    }
                                        document.getElementById('count').innerHTML=countString;
                                        document.getElementById('sec').innerHTML=secString;
                                        document.getElementById('min').innerHTML=minString;
                                        document.getElementById('hrs').innerHTML=hrsString;


                    }
}