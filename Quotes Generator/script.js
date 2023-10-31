const api_url="https://api.quotable.io/random";
const quotesDisplay= document.getElementById('quotesDisplay');
const authorName= document.getElementById('authorName');
document.getElementById('newQuotes').addEventListener('click',async function(){
                    const response=await fetch(api_url);
                    const data=await response.json();
                    quotesDisplay.innerHTML=data.content;
                    authorName.innerHTML=data.author;
});
document.getElementById('tweet').addEventListener('click', function(){
                    window.open("https://twitter.com/intent/tweet?text="+quotesDisplay.innerHTML+
                    "--By" +authorName.innerHTML,'Tweet Window', 'height:300','width:600');
})