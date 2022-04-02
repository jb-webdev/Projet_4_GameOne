function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* on recupèrer notre élement du dom  par la classe avec querySelector*/
const modalClose = document.querySelector(".close");
/*  on creer notre fonction 
    on passe display none au click sur le span pour faire disparaître notre modal de l'affichage
*/
function closeButton() {
  modalbg.style.display = "none";
}
