function compute()
{
   var Amount = document.getElementById("principal");
   var Rate = document.getElementById("rate");
   var Years = document.getElementById("years");
   if(Amount.value<=0){
       alert("Enter a positive number");
       return false;
   }
   if(Rate.value==0){
    alert("please enter a positive value of Rate");
    return false;
}

   var final = parseFloat(Amount.value) *(1 + parseFloat(Rate.value) * parseInt(Years.value) /100);
  final = final.toFixed(2);
   const date = new Date();
   Years = date.getFullYear();
   Years = Years+parseInt(Years.value);
   document.getElementById("result").innerHTML="If you deposit today Rs."+"<mark>"+Amount.value+"</mark>"+"<br>"+"at an interest rate of "+"<mark>"+Rate.value+"%."+"</mark>"+"<br>"+"You will receive an amount of Rs."+"<mark>"+final+"</mark>"+","+"<br>"+"in the year "+"<mark>"+Years+"</mark>"+"."
}
