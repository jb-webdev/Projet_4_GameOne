// Script fourni par OC pour le début du projet 

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const btnClickMenu = document.querySelector('.clickOpen');
btnClickMenu.addEventListener('click', function() {
  editNav();
});

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
        // je vide mon localStorage à la fermeture de la modal.
        localStorage.clear();
    }
  btnListener.addEventListener("click", closeModal);    
}
// je declare des variables .
// PARAMS Modal Inscription

const modalInscription = ".bground";
const btnInscriptionClose = ".close";
// PARAMS Modal message validation
const messageValidation = ".wrapper-modal-confirmation";
const btnMessageValidation = ".closeMsgValidation";


closeModal(modalInscription, btnInscriptionClose); // FERMETURE DE LA MODAL INSCRIPTION
closeModal(messageValidation, btnMessageValidation); // FERMETURE DE LA MODAL MESSAGE VALIDATION

// Function pour fermer la modal du message de validation d'envoi
document.getElementById('buttonValidationClose').addEventListener('click', closModalValidation);
function closModalValidation(){
  let modalClose = document.querySelector(messageValidation);
  modalClose.style.display = 'none';
  localStorage.clear();
}

//=============================================
// ======== Control du formulaire =============
//=============================================
// On ecoute les entrees dans l'input FIRST
document.getElementById('first').addEventListener("input", function (e) {
  validFirst();
});
// fonction pour verifier le formulaire FIRST
function validFirst() {
  const elt = document.forms["reserve"]['first'].value;
  let regex = /^[a-zA-Z-\s]{2,}$/;
  let errorPrenom = false;

  let msgError = document.getElementById("erreurPrenom");
  let errorInputBorder = document.getElementById("first");

  if (!elt) {
    msgError.innerText = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorPrenom = false;
  } else if (!regex.test(elt)) {
    msgError.innerText = "Veuillez entrer 2 caractères ou plus";
    errorInputBorder.style.border = "2px solid red";
    errorPrenom = false;
  } else if (regex.test(elt)) {
    msgError.innerText = "";
    errorInputBorder.style.border = "none";
    errorPrenom = true;
  }
  else {
    errorPrenom = true;
  }
  return errorPrenom;
}

//=======================================
// On ecoute les entrees dans l'input LAST
document.getElementById('last').addEventListener("input", function (e) {
  validLast();
});
// fonction pour verifier le formulaire LAST
function validLast() {
  let elt = document.forms["reserve"]['last'].value;
  let regexName = /^[a-zA-Z-\s]{2,}$/;
  let errorName = false;

  let msgError = document.getElementById("erreurNom");
  let errorInputBorder = document.getElementById("last");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorName = false;
  } else if (!regexName.test(elt)) {
    msgError.innerHTML = "Veuillez entrer 2 caractères ou plus";
    errorInputBorder.style.border = "2px solid red";
    errorName = false;
  } else if (regexName.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorName = true;
  }
  return errorName;
}

//=======================================
// On ecoute les entrees dans l'input Email
document.getElementById('email').addEventListener("input", function (e) {
  validEmail();
});
// fonction pour verifier le formulaire Email
function validEmail() {
  let elt = document.forms["reserve"]['email'].value;;
  let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorEmail = false;
  let errorInputBorder = document.getElementById("email");

  let msgError = document.getElementById("erreurEmail");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorEmail = false;
  } else if(!regexEmail.test(elt)) {
    msgError.innerHTML = "Votre email est invalide";
    errorInputBorder.style.border = "2px solid red";
    errorEmail = false;
  } else if (regexEmail.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorEmail = true;
  }
  return errorEmail;
}

//=======================================
// On ecoute les entrées dans l'input DATE
document.getElementById('birthdate').addEventListener("input", function (e) {
  validDate();
});
// fonction pour verifier le formulaire DATE
function validDate() {
  let elt = document.forms["reserve"]['birthdate'].value;
  let regexDate = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;
  let errorDate = false;
  let msgError = document.getElementById("erreurBirthdate");
  let errorInputBorder = document.getElementById("birthdate");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorDate = false;
  } if (!regexDate.test(elt)) {
    msgError.innerHTML = "Vous devez entrer votre date de naissance.";
    errorInputBorder.style.border = "2px solid red";
    errorDate = false;
  } if (regexDate.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorDate = true;
  }
  return errorDate;
}

//=======================================
// On ecoute les entrees dans l'input QUANTITY
document.getElementById("quantity").addEventListener("input", function (e) {
  validQuantity();
});

// fonction pour verifier le formulaire QUANTITY
function validQuantity() {
  let elt = document.forms["reserve"]['quantity'].value;
  let errorQuantity = false;
  let regexQuantity = /^[0-9]{1,}$/;
  let msgError = document.getElementById("erreurQuantity");
  let errorInputBorder = document.getElementById("quantity");

  if (!elt){
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorInputBorder.style.border = "2px solid red";
    errorQuantity = false;
  }  if (regexQuantity.test(elt)) {
    msgError.innerHTML = "";
    errorInputBorder.style.border = "none";
    errorQuantity = true;
  }
  return errorQuantity;
}

//=======================================
// On ecoute les entrees dans l'input CGU
document.getElementById("checkbox1").addEventListener("input", function (e) {
  validCgu();
});

// fonction pour verifier le formulaire CGU
function validCgu() {
  let elt = document.forms["reserve"]['checkbox1'].checked;
  let errorCgu = false;
  let msgError = document.getElementById("spanErrorCheckCgu");

  if (!elt) {
    msgError.innerText = "Vous devez acceptez les termes et conditions";
    errorCgu = false;
  } else {
    msgError.innerText = "";
    errorCgu = true
  }
  return errorCgu;
}

// Fonction pour la verification de la selection de la ville du tournoi inputs radio
function validCheckRadioLocation() {
  let elt = document.forms["reserve"]['location'].value;
  let errorLocation = false;
  let msgError = document.getElementById("spanErrorLocation");
  if (!elt) {
    msgError.innerText = "Vous devez selectionner obligatoirement une ville";
    errorLocation = false;
  } else {
    msgError.innerText = "";
    errorLocation = true
  }
  return errorLocation;
}

// Je creer un fonction qui stock une valeur non sensible dans le localstorage.
function storageEtat() {
  return localStorage.setItem("etatMessage", true);
}
// Je creer une fonction pour afficher ma modal message envoyé.
function afficheMessage() {
  if (localStorage.etatMessage) {
    let modalMessage = document.querySelector(".wrapper-modal-confirmation");
    modalMessage.style.display = 'block';
  }
}

// J'ecoute l'evenement submit et je relance les fonction a l'intèrieur.
//======================================================================
// J'ecoute l'evenement submit et je relance les fonction a l'intèrieur.
//======================================================================
document.forms["formValid"].addEventListener("submit", function (e) {


  let errorSubmitValidation = validFirst();
    errorSubmitValidation = validLast() && errorSubmitValidation;
    errorSubmitValidation = validEmail() && errorSubmitValidation;
    errorSubmitValidation = validDate() && errorSubmitValidation;
    errorSubmitValidation = validQuantity() && errorSubmitValidation;
    errorSubmitValidation = validCheckRadioLocation() && errorSubmitValidation;
    errorSubmitValidation = validCgu() && errorSubmitValidation;

  if (errorSubmitValidation == false) {
    e.preventDefault();
    return false
  } else {
    storageEtat()
    return true;
  }
})

// j'affiche le message après l'envoie !
afficheMessage();

// ===========================================
// ============== FIN DU SCRIPT ==============
// ===========================================