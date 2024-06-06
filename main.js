var largesizebtn =document.querySelector(".large-size");
var smallsizebtn =document.querySelector(".small-size");
var div=document.querySelector("div");
function largesize(){
    div.classList.add("large");
}
function smallsize(){
    div.classList.remove("large");
}
largesizebtn.onclick=largesize;
smallsizebtn.onclick=smallsize;