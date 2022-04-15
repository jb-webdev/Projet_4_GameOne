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
// je declare des variable avec les paramêtres désiré.
// PARAMS Modal Inscription

const modalInscription = ".bground";
const btnInscriptionClose = ".close";
// PARAMS Modal message validation
const messageValidation = ".wrapper-modal-confirmation";
const btnMessageValidation = ".closeMsgValidation";

closeModal(modalInscription, btnInscriptionClose); // FERMETURE DE LA MODAL INSCRIPTION
closeModal(messageValidation, btnMessageValidation); // FERMETURE DE LA MODAL MESSAGE VALIDATION

//=============================================
// ======== Control du formulaire =============
//=============================================
// On ecoute les entrees dans l'input FIRST
document.getElementById('first').addEventListener("input", function (e) {
  let valuePrenom = e.target.value;
  validFirst(valuePrenom);
});
// fonction pour verifier le formulaire FIRST
function validFirst(elt) {

  let regex = /^[a-zA-Z-\s]{2,}$/;
  let errorPrenom = false;

  let msgError = document.getElementById("erreurPrenom");

  if (!elt) {
    msgError.innerText = "Le champ ne doit pas être vide !";
    errorPrenom = false;
  } else if (!regex.test(elt)) {
    msgError.innerText = "Veuillez entrer 2 caractères ou plus";
    errorPrenom = false;
  } else if (regex.test(elt)) {
    msgError.innerText = "";
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
  let valueNom = e.target.value;
  validLast(valueNom);
});
// fonction pour verifier le formulaire LAST
function validLast(elt) {
  let regexName = /^[a-zA-Z-\s]{2,}$/;
  let errorName = false;

  let msgError = document.getElementById("erreurNom");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorName = false;
  } else if (!regexName.test(elt)) {
    msgError.innerHTML = "Veuillez entrer 2 caractères ou plus";
    errorName = false;
  } else if (regexName.test(elt)) {
    msgError.innerHTML = "";
    errorName = true;
  }
  return errorName;
}

//=======================================
// On ecoute les entrees dans l'input Email
document.getElementById('email').addEventListener("input", function (e) {
  let valueEmail = e.target.value;
  validEmail(valueEmail);
});
// fonction pour verifier le formulaire Email
function validEmail(elt) {
  let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorEmail = false;

  let msgError = document.getElementById("erreurEmail");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorEmail = false;
  } if (!regexEmail.test(elt)) {
    msgError.innerHTML = "Votre email est invalide";
    errorEmail = false;
  } if (regexEmail.test(elt)) {
    msgError.innerHTML = "";
    errorEmail = true;
  }
  return errorEmail;
}

//=======================================
// On ecoute les entrees dans l'input DATE
document.getElementById('birthdate').addEventListener("input", function (e) {
  let valueDate = e.target.value;
  validDate(valueDate);
});
// fonction pour verifier le formulaire DATE
function validDate(elt) {
  let regexDate = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;
  let errorDate = false;
  let msgError = document.getElementById("erreurBirthdate");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorDate = false;
  } if (!regexDate.test(elt)) {
    msgError.innerHTML = "Vous devez entrer votre date de naissance.";
    errorDate = false;
  } if (regexDate.test(elt)) {
    msgError.innerHTML = "";
    errorDate = true;
  }
  return errorDate;
}

//=======================================
// On ecoute les entrees dans l'input QUANTITY
document.getElementById("quantity").addEventListener("input", function (e) {
  let valueQuantity = e.target.value;
  validQuantity(valueQuantity);
});

// fonction pour verifier le formulaire QUANTITY
function validQuantity(elt) {
  let errorQuantity = false;
  let regexQuantity = /^[0-9]{1,}$/;
  let msgError = document.getElementById("erreurQuantity");

  if (!elt) {
    msgError.innerHTML = "Le champ ne doit pas être vide !";
    errorQuantity = false;
  } if (!regexQuantity.test(elt) || elt === "e") {
    msgError.innerHTML = "votre saisie est invalide !";
    errorQuantity = false;
  } else if (regexQuantity.test(elt)) {
    msgError.innerHTML = "";
    errorQuantity = true;
  }
  return errorQuantity;
}

//=======================================
// On ecoute les entrees dans l'input CGU
document.getElementById("checkbox1").addEventListener("input", function (e) {
  let checkedCgu = this.checked;
  validCgu(checkedCgu);
});

// fonction pour verifier le formulaire CGU
function validCgu(elt) {
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
function validCheckRadioLocation(elt) {
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
  let valueFirst = document.forms["reserve"]['first'].value;
  let valueLast = document.forms["reserve"]['last'].value;
  let valueEmail = document.forms["reserve"]['email'].value;
  let valueBirthdate = document.forms["reserve"]['birthdate'].value;
  let valueQuantity = document.forms["reserve"]['quantity'].value;
  let valueLocation = document.forms["reserve"]['location'].value;
  let valueCgu = document.forms["reserve"]['checkbox1'].checked;


  let errorSubmitValidation =
    validFirst(valueFirst)
    && validLast(valueLast)
    && validLast(valueLast)
    && validEmail(valueEmail)
    && validDate(valueBirthdate)
    && validQuantity(valueQuantity)
    && validCgu(valueCgu)
    && validCheckRadioLocation(valueLocation);

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