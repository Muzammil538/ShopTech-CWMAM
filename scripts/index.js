// Assigning the variables
const searchForm = document.querySelector("#searchFormtop");
const searchInput = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");
const Card = document.querySelectorAll(".row-md .card");
const cardTitle = document.querySelectorAll(".card-title");

searchBtn.addEventListener("click",searchQuery);

// Mobile search form 

const searchBtnII = document.querySelector("#searchBtnii");
const searchFormII = document.querySelector("#searchFormii");
const searchInputII = document.querySelector("#searchBoxii"); 

searchBtnII.addEventListener("click", searchquery);

// Functions are here
function searchQuery () {
    var srhInpVal = searchInput.value.trim();
    var srhValLwr = srhInpVal.toLowerCase();
    for(let i = 0; i<cardTitle.length ; i++){
        if(srhValLwr == cardTitle[i].innerHTML.toLowerCase()){
            // cardTitle[i].classList.toggle("red");
            Card[i].classList.toggle("high");
        }else {
            //dist[i].classList.toggle("remove");
            Card[i].classList.toggle("cut");
            
        }
    }
}
function searchquery(){
    var srhInpValII = searchInputII.value.trim();
    var srhValLwr = srhInpValII.toLowerCase();
    for(let i = 0; i<cardTitle.length ; i++){
        if(srhValLwr == cardTitle[i].innerHTML.toLowerCase()){
            // cardTitle[i].classList.toggle("red");
            Card[i].classList.toggle("high");
        }else {
            //dist[i].classList.toggle("remove");
            Card[i].classList.toggle("cut");
            
        }
    }
}

const menuBars = document.querySelector("#menuBars");
menuBars.addEventListener("click", ()=>{
    searchFormII.classList.toggle("active");
    if(searchFormII.className == "active"){
        menuBars.classList.add("fa-times");
        menuBars.classList.remove("fa-bars");
    }
    else{
        menuBars.classList.remove("fa-times");
        menuBars.classList.add("fa-bars")

    }
});