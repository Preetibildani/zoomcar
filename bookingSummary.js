let car_data = JSON.parse(localStorage.getItem("carShow"));
let pickUpLocation = JSON.parse(localStorage.getItem("pickUpLocation"))[0];
console.log(pickUpLocation);
let dropOffLocation = JSON.parse(localStorage.getItem("dropOffLocation"))[0];
console.log(dropOffLocation);

let start_Date = JSON.parse(localStorage.getItem("start_Date"));
start_Date = start_Date[0] +" "+start_Date[1];
console.log(start_Date);
let end_Date = JSON.parse(localStorage.getItem("end_Date"));

end_Date = end_Date[0] + " "+ end_Date[1];

console.log(end_Date);

let rightData = document.getElementById("ranRightData");
let lefttData = document.getElementById("ranLeftData");
let carPrice=document.getElementById("ranCarPrice");
let carKm= document.querySelector("ranKm");
let carRating=document.getElementById("ranRating");
let pickup = document.getElementById("ranPickup");
let dropoff = document.getElementById("ranDropoff");
let carNav=document.getElementById("carNav");
let navStart = document.getElementById("navStart");
let navEnd = document.getElementById("navEnd");

function showData() {
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        let img = document.createElement('img');
        img.src = car_data.img;

        let name = document.createElement('h4');
        let name2 = document.createElement('h4');
        name.innerText = car_data.name;
        name2.innerText = car_data.name;


        let fuel = document.createElement('p');
        fuel.innerText = car_data.fuel

        let Rating = document.createElement('h4')
        Rating.innerHTML = ` ⭐⭐⭐⭐⭐ ${car_data.Rating}`


        let price = document.createElement('h3');
        price.innerHTML = car_data.price;
       

        div1.append(name2,fuel);
        rightData.append(img);
        lefttData.append(div1);
       carPrice.append(price)
        carRating.append(Rating);
        pickup.append(start_Date,pickUpLocation); 
        dropoff.append(end_Date,dropOffLocation);
        carNav.append(name);
        navStart.append(start_Date);
        navEnd.append(end_Date);


}

showData(); 