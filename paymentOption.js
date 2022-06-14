let totalFare=JSON.parse(localStorage.getItem("totalFare"));
console.log(totalFare); 
let total=document.getElementById("totalFare");


    let p=Number(totalFare);
    let totalPrice=document.createElement("h3");
    totalPrice.innerHTML=`Total Fare:  ₹ ${totalFare}`
    total.append(totalPrice);
