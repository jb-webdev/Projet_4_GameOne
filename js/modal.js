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
const btnInscriptionClose = ".close";
// PARAMS Modal message validation
const messageValidation = ".wrapper-modal-confirmation";
const btnMessageValidation = ".closeMsgValidation";

closeModal(modalInscription, btnInscriptionClose); // FERMETURE DE LA MODAL INSCRIPTION
closeModal(messageValidation, btnMessageValidation); // FERMETURE DE LA MODAL MESSAGE VALIDATION

//=============================================
// ======== Control du formulaire =============
//=============================================
// Variables utile pour le script 
//==============================

// PRENOM à controller
const inputPrenom = 'first';
const spanErrorPrenom = "erreurPrenom";

// NOM à controller
const inputNom = "last";
const spanErrorNom = "erreurNom";
const regexUserName = /^[a-zA-Z-\s]{2,}$/; // on accepte les minuscule les majuscule le tiret et un espace

// EMAIL à contrôler
const inputEmail = "email";
const spanErrorEmail = "erreurEmail";
  // regex pour le contrôle de l'email.
const regexEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// BIRTHDAY à controller
const inputBirthdate = "birthdate";
const spanErrorBirthdate = "erreurBirthdate";
  // regex pour le controle de la date
const regexDate = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;

// QUANTITY à controller
const inputQuantity ="quantity";
const spanErrorQuantity = "erreurQuantity";
  // regex pour le controlle de la quantity
const regexQuantity = /^[0-9]{1,}$/;

// QUANTITY à controller
const inputCheckCgu ="checkbox1";
const spanErrorCheckCgu = "spanErrorCheckCgu";


// Fonction Util pour la vérification du formulaire
//==================================================

// FONCTION pour le message d'erreur à afficher
function getCodeValidation(recElement) {
  // exemple : return document.getElementById("erreurPrenom"), re = regex
  return document.getElementById(recElement);
}

// Fonction pour contrôler les élements que je désire vérifier.
function validNombreCaractère (a, spanErr, re) {
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {
    const recElement = spanErr; // on rajoute l'id de lelement à modifier.
    let regexTest = re;
    if (regexTest.test(e.target.value)) {
      getCodeValidation(recElement).innerText = "";
    } else {
      getCodeValidation(recElement).innerText = "Veuillez entrer ou moins 2 caractères !";
      
    }
  });
}

// Fonction pour la vérification du mail
function validEmailFonction (a, spanErr,re) {
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {
    const regex = re;
    if (regex.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
    } else {
      getCodeValidation(spanErr).innerText = "Votre email est invalide";
    }
  });
}

// Fonction pour la vérification de la date de naissance
function validBirthdateFunction(a, spanErr,re) {
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {
    const regex = re;
    if (regex.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
    } else {
      getCodeValidation(spanErr).innerText = "Votre email est invalide";
    }
  });
}

// Fonction pour la vérification de la quantité
function validQuantity(a, spanErr, re){
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {
    const regex = re;
    if (regex.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
    } else {
      getCodeValidation(spanErr).innerText = "Votre quantity est invalide";
    }
  });
}

// Fonction pour la vérification de la quantité
function validCheckCgu(a, spanErr){
  //a = inputCheckbox  
  document.getElementById(a).addEventListener("input", function(e) {
    if (this.checked == false){
      document.getElementById(spanErr).innerText = "Votre quantity est invalide";
    } else {
      document.getElementById(spanErr).innerText = "";
    }
  });
}


// Je lance toutes les fonction dont j'ai besoin pour vérifier mon formulaire avant le click du btn envoyer
//=========================================================================================================
// verification nom et prénom
validNombreCaractère(inputPrenom, spanErrorPrenom, regexUserName);
validNombreCaractère(inputNom, spanErrorNom, regexUserName);
// verification email
validEmailFonction(inputEmail, spanErrorEmail, regexEmail);
// verification date de naissance
validBirthdateFunction(inputBirthdate, spanErrorBirthdate, regexDate);
validQuantity(inputQuantity, spanErrorQuantity, regexQuantity);
// verification checkbox CGU
validCheckCgu(inputCheckCgu, spanErrorCheckCgu);


// J'ecoute l'evenement submit et je relance les fonction a l'intèrieur.
//======================================================================
document.forms["formValid"].addEventListener("submit", function(e){
    // REGEX
    const regexForUsername = /^[a-zA-Z-\s]{2,}$/;
    const regexForEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexForDate = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;
    const regexQuantite = /^[0-9]{1,}$/;
    // VARIABLE
    let prenom = document.forms["reserve"]["first"]; 
    let name = document.forms["reserve"]["last"];               
    let email = document.forms["reserve"]["email"];
    let birthdate = document.forms["reserve"]["birthdate"];
    let quantity = document.forms["reserve"]["quantity"];
    let checkCgu = document.forms["reserve"]["checkbox1"];

    if (!regexForUsername.test(prenom.value)){
      e.preventDefault();
      return false
    }if (!regexForUsername.test(name.value)){
      e.preventDefault();
      return false
    }if (!regexForEmail.test(email.value)){
      e.preventDefault();
      return false
    }if (!regexForDate.test(birthdate.value)){
      e.preventDefault();
      return false
    }if (!regexQuantite.test(quantity.value)){
      e.preventDefault();
      return false
    }if (!checkCgu.checked){
      e.preventDefault();
      return false
    }else {
      return true
    }
})
// ===========================================
// ============== FIN DU SCRIPT ==============
// ===========================================