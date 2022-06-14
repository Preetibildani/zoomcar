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





   //   Video Integration 
   function time() {
    video_d = document.getElementById("myvideo").currentTime;
    console.log(video_d);

    let perc = (100/33)*video_d;

    let vsp = document.getElementById("vsp");
    vsp.style.width = perc+"%";


}


setInterval(time,10);
 //   Video Integration