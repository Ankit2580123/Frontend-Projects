const qrText=document.getElementById("qrtext");
const qrImage=document.getElementById("qrImage");
const ImageBox=document.getElementById("ImageBox");

document.getElementById("btn").addEventListener('click', ()=>{
                    if(qrText.value.length>0){
                    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
                    + qrText.value;
                     ImageBox.classList.add("show-img");
                    }
                    else{

                                        
                                        ImageBox.classList.remove('show-img');
                                        qrText.classList.add("empty");
                                        setTimeout(()=>{
                                                            qrText.classList.remove("empty");            
                                        },1000)
                                        // const para = document.createElement('p');
                                        // const text=document.createTextNode('Please Enter the Text or Url!');
                                        // para.appendChild(text);
                                        // const element = document.getElementsById("paragraph");
                                        // element.appendChild(para);
                    }
});