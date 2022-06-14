let btn = document.querySelector(".btn-primary");
btn.removeAttribute("disabled");


// enable confirm button function
function confirm() {
    let btn = document.querySelector(".city-box-btn");
    btn.removeAttribute("disabled");
}


// after changing the city name
function confirmCity() {
    console.log("yes");
    let selected_city = document.getElementById("selected_city").value;
    localStorage.setItem("city",JSON.stringify([selected_city]));  //setting selecting city to local storage
    let city_name = document.querySelector(".city-name");
    let sm = document.querySelector(".sm");
    city_name.innerText = selected_city;
    sm.innerText = selected_city;

    let city_box = document.querySelector(".city-box");
    city_box.style.display = "none";
}
let city_name = document.querySelector(".city-name");
let sm = document.querySelector(".sm");

let selected_city = JSON.parse(localStorage.getItem("city"))[0]; //getting selecting city to local storage


// showing city name by getting 
city_name.innerText = selected_city;
sm.innerText = selected_city;

// show change city block function
function changeCity(){
    let city_box = document.querySelector(".city-box");
    city_box.style.display = "block";
    closePopup();
    hideSideBar();
}


// Show SideBar Function
function showSideBar() {
    let sidebar_component = document.querySelector(".sidebar-component");
    sidebar_component.style.display = "block";

    let sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = "translate3d(0%, 0px, 0px)";

    let sidebar_ovl = document.querySelector(".sidebar-ovl");
    sidebar_ovl.style.opacity = "1";
    sidebar_ovl.style.pointerEvents = "auto";
    sidebar_ovl.addEventListener("click", hideSideBar);
}


// Hide SideBar Function
function hideSideBar() {
    let sidebar_component = document.querySelector(".sidebar-component");
    sidebar_component.style.display = "none";

    let sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = "translate3d(-102%, 0, 0)";

    let sidebar_ovl = document.querySelector(".sidebar-ovl");
    sidebar_ovl.style.opacity = "0";

    sidebar_ovl.removeEventListener("click", hideSideBar);
}


// function for choosing trip option
function showPopup() {
    let show_trip = document.querySelector(".show-popup");
    show_trip.style.display = "block";
    let trip_option1 = document.querySelector(".trip-option-select.o-1");
    trip_option1.addEventListener("click", roundTrip);
    let trip_option2 = document.querySelector(".trip-option-select.o-2");
    trip_option2.addEventListener("click", oneWay);
}


// close popup function
function closePopup() {
    let show_trip = document.querySelector(".show-popup");
    show_trip.style.display = "none";
}


// selecting round-trip from options function
function roundTrip() {
    localStorage.setItem("trip",JSON.stringify(["round"]));
    let trip_option = document.getElementById("trips");
    trip_option.innerText = "Round Trip";
    let drop = document.querySelector(".wrap-two");
    drop.style.display = "none";
    closePopup();

}
// selecting one-way-trip from options function
function oneWay() {
    localStorage.setItem("trip",JSON.stringify(["oneway"]));
    let trip_option = document.getElementById("trips");
    trip_option.innerText = "One Way Trip";
    let drop = document.querySelector(".wrap-two");
    drop.style.display = "block";
    closePopup();

}

localStorage.setItem("trip",JSON.stringify(["oneway"]));

if(JSON.parse(localStorage.getItem("trip"))[0]=="round"){
    roundTrip();
}else{
    oneWay();
}

// About display toggle function
function displayAbout(){
    let aInner = document.querySelector(".aInner");
    if(aInner.style.display=="block"){
        aInner.style.display="none";
    }else{
        aInner.style.display="block";
    }

}

function setPickUp(){
    localStorage.setItem("selectLocation",JSON.stringify(["pickup"]));
}
function setDropOff(){
    localStorage.setItem("selectLocation",JSON.stringify(["dropoff"]));
}

let pickUpLocation = JSON.parse(localStorage.getItem("pickUpLocation"))[0];
let pick_up = document.querySelector(".pick-up");
pick_up.innerText = pickUpLocation;

let dropOffLocation = JSON.parse(localStorage.getItem("dropOffLocation"))[0];
let drop_off = document.querySelector(".drop-off");
drop_off.innerText = dropOffLocation;


// calaender start time
let start_Date = JSON.parse(localStorage.getItem("start_Date"));
let start_time = document.getElementById("start_time");
start_time.innerText = start_Date[0] +" "+ start_Date[1];
start_time.style.color = "black";

// calender end time
let end_Date = JSON.parse(localStorage.getItem("end_Date"));
let end_time = document.getElementById("end_time");
end_time.innerText = end_Date[0] +" "+ end_Date[1];
end_time.style.color = "black";



// search Car Page
function searchCar(e){
    e.preventDefault();
    window.location.href = "Car_Booking_Page.html"
}


// user logged in or logged out

if(JSON.parse(localStorage.getItem("user"))!==null){

    let user_data = JSON.parse(localStorage.getItem("user"));
    console.log(user_data[0].name)

    let user = document.getElementById("user");
    user.style.display = "flex";
    user.style.alignItems = "center";

    let nav_name = document.getElementById("nav_name");
    nav_name.innerText = user_data[0].name;


    let side_name = document.getElementById("side_name");
    side_name.innerText = user_data[0].name;

    let side_email = document.getElementById("side_email");
    side_email.innerText = user_data[0].email

    let side_phone = document.getElementById("side_phone");
    side_phone.innerText = user_data[0].mobile;

    let user_not_login = document.getElementById("user_not_login");
    user_not_login.style.display = "none";

    let not_logged = document.querySelector(".not-loggedin");
    not_logged.style.display="none";

    
    let user_looged_in = document.querySelector(".user-logged-in");
    user_looged_in.style.display="block";

    let logout = document.querySelector(".logout");
    logout.style.display = "block";


}else{
    let user = document.getElementById("user");
    user.style.display = "none";

    let user_not_login = document.getElementById("user_not_login");
    user_not_login.style.display = "block";

    let not_logged = document.querySelector(".not-loggedin");
    not_logged.style.display="flex";


    let user_looged_in = document.querySelector(".user-logged-in");
    user_looged_in.style.display="none";

    pick_up.innerText = "Pick Up City, Airport, Address or Hotel";
    drop_off.innerText = "Drop Off City, Airport, Address or Hotel";


    let logout = document.querySelector(".logout");
    logout.style.display = "none";
}


function logout(){
    localStorage.setItem("user",null)
    window.location.reload()
}