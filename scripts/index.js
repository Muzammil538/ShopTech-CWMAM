// Assigning the variables
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn")
const Card = document.querySelectorAll(".row-md .card");
const cardTitle = document.querySelectorAll(".card-title");

searchBtn.addEventListener("click",searchQuery);

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