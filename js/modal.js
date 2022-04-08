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

// Je verifier les champs du formulaire
// je bloc le bouton d'envoie du formulaire avec l'attribut submit.
function disableSubmit(disabled) {
  if (disabled) {
    document.getElementById("btnSubmitValidation").setAttribute("disabled", true);
  } else {
    document.getElementById("btnSubmitValidation").removeAttribute("disabled", false);
  }
}

// Je créer une fonction pour le message d'erreur à afficher

function getCodeValidation(recElement) {
  // return document.getElementById("erreurPrenom");
  return document.getElementById(recElement);
}


// 1 - ici on controle que les inputs prénom est nom contiennent au moins deux caractères.

// Je creer mes variables pour verifier les valeurs entrer par l'utilisateur.
// PRENOM à controller
const inputPrenom = 'first';
const spanErrorPrenom = "erreurPrenom";
// NOM à controller
const inputNom = "last";
const spanErrorNom = "erreurNom";

// Je créer une fonction pour contrôler les élements que je désire vérifier.
function validNombreCaractère (a, spanErr) {
  //a = inputId  & spanError = span message erreur a afficher si besoin
  document.getElementById(a).addEventListener("input", function(e) {
    const recElement = spanErr; // on rajoute l'id de lelement à modifier.
    if (e.target.value.length > 1) {
      getCodeValidation(recElement).innerText = "";
      disableSubmit(false);
    } else {
      getCodeValidation(recElement).innerText = "Veuillez entrer ou moins 2 caractères !";
      disableSubmit(true);
    }
  });
}

// enfin j'utilise mes fonctions quand j'en ai besoin.
validNombreCaractère(inputPrenom, spanErrorPrenom);
validNombreCaractère(inputNom, spanErrorNom);


// 2 ici je contrôle que l'email et valide et conforme.

// email à contrôler
const inputEmail = "email";
const spanErrorEmail = "erreurEmail";

// je créer une variable pour mon regex
const regexEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validEmailFonction (a, spanErr,regexEmail) {
  //a = inputId  & spanError = span message erreur a afficher si besoin
  document.getElementById(a).addEventListener("input", function(e) {
    const regex = regexEmail;
    if (regex.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
      disableSubmit(false);
    } else {
      getCodeValidation(spanErr).innerText = "Votre email est invalid";
      disableSubmit(true);
    }
  });
}

// j'utilise la fonction pour vérifier l'email.
validEmailFonction(inputEmail, spanErrorEmail, regexEmail);
