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

// Je ceer une function réutilisable pour la fermeture de mes modals.

function closeModal(m, b){
  const recModal = document.querySelector(m); 
  const btnListener = document.querySelector(b);
    function closeModal(){ 
      recModal.style.display = 'none';
    }
  btnListener.addEventListener("click", closeModal);    
}
// je declare des variable avec les paramêtres désiré.
// PARAMS Modal Inscription
const modalInscription = ".bground";
const BtnInscriptionClose = ".close";
// PARAMS Modal message validation
const messageValidation = ".wrapper-modal-confirmation";
const btnMessageValidation = ".closeMsgValidation";

closeModal(modalInscription, BtnInscriptionClose); // FERMETURE DE LA MODAL INSCRIPTION
closeModal(messageValidation, btnMessageValidation); // FERMETURE DE LA MODAL MESSAGE VALIDATION

// ========= MODAL MSG VALIDATION =========
// ========================================

const messageConfirmation = document.querySelector(".wrapper-modal-confirmation");

// si on change false a true on affiche le message de validation

const etatMessageValidation = true; // Je creer un etat d'affichage.

function afficherMessageValidation (etat){
  if (etat){
    messageConfirmation.style.display = "block";
  } else {
    messageConfirmation.style.display = "none";
  }
}

afficherMessageValidation(etatMessageValidation);
