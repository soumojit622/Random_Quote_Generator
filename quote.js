const quoteText=document.querySelector(".quote"),
authorName=document.querySelector(".author .name"),
quoteBtn=document.querySelector("button"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy"),
twitterBtn=document.querySelector(".twitter");



function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML="Loading quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
    console.log(result);
    quoteText.innerHTML=result.content;
    authorName.innerHTML=result.author;
    quoteBtn.innerHTML="New Quote";
    quoteBtn.classList.remove("loading");
   });
}


soundBtn.addEventListener("click",()=>{
    //the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance);//speaks the utterance

});

copyBtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteText.innerHTML);

});

twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl,"_blank");//opening a new tab passing the quote in the url
 });

quoteBtn.addEventListener("click",randomQuote);