var exchangeForm=document.querySelector(".exchangeForm");

exchangeForm.onsubmit=function(e){
e.preventDefault();
var elements=e.target.elements;
console.log(elements[1].value);

if(elements[1].value=="dollar"){
    elements[0].value*=3.5;
}else if(elements[1].value=="dinar"){
    elements[0].value*=4.8;
}else{
    elements[0].value*=1;
}
    console.log(elements[0].value);
   

}
