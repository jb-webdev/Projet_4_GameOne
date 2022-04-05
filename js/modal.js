// Script fourni par OC pour le début du projet 

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

// ============ Mon Script ===============
//========================================

// FERMETURE DE LA MODAL INSCRIPTION
//On recupere l'element du DOM et ou ecoute l'evenement du click sur (x)

const modalInscriptionClose = document.querySelector(".bground");
const BtnModalClose = document.querySelector(".close");

function closeModalInscription(){
  modalInscriptionClose.style.display = "none";
}
BtnModalClose.addEventListener("click", closeModalInscription);

// FERMETURE DE LA MODAL MESSAGE VALIDATION
//On recupere l'element du DOM et ou ecoute l'evenement du click sur (x) si on click on lance la fonction closeMessageValidation()
const modalMsgValidation = document.querySelector(".wrapper-modal-confirmation");
const btnCloseMsgValidation = document.querySelector(".closeMsgValidation")

function closeMessageValidation(){
  modalMsgValidation.style.display = 'none';
}
btnCloseMsgValidation.addEventListener("click", closeMessageValidation);



// ========= MODAL MSG VALIDATION =========
// ========================================

const messageConfirmation = document.querySelector(".wrapper-modal-confirmation");

// si on change false a true on affiche le message de validation
const etatMessageValidation = true;

function afficherMessageValidation (etat){
  if (etat){
    messageConfirmation.style.display = "block";
  } else {
    messageConfirmation.style.display = "none";
  }
}

afficherMessageValidation(etatMessageValidation);
