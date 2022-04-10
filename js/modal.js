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

// Je créer des objets avec les valeur utils. 
//==============================
// Objet pour recuperer mes ID
const inputsId = new Object();

inputsId.prenom = "first";
inputsId.nom = "last";
inputsId.email = "email";
inputsId.birthdate = "birthdate";
inputsId.quantity = "quantity";
inputsId.cgu = "checkbox1";
inputsId.newslater = "checkbox2";

// Objet pour recuperer mes ID pour affichage des message erreur
const spanErrorInputs = new Object();

spanErrorInputs.prenom = "erreurPrenom";
spanErrorInputs.nom = "erreurNom";
spanErrorInputs.email = "erreurEmail";
spanErrorInputs.birthdate = "erreurBirthdate";
spanErrorInputs.quantity = "erreurQuantity";
spanErrorInputs.cgu = "spanErrorCheckCgu";

// Objet pour l'affichage du message d'erreur.
const messageError = new Object();

messageError.msg1 = "Le champ ne pas être vide !";
messageError.msg2 = "Veuillez entrer 2 caractères ou plus";
messageError.email = "Votre email est invalide";
messageError.date = "Vous devez entrer votre date de naissance.";
messageError.quantity = "Votre quantity est invalide";
messageError.cgu = "Vous devez vérifier que vous acceptez les termes et conditions";

// Objet pour mes regex.
const regexVerification = new Object();

regexVerification.userName = /^[a-zA-Z-\s]{2,}$/;
regexVerification.email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
regexVerification.date = /^[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}$/;
regexVerification.quantity = /^[0-9]{1,}$/;

// Objet pour la modal du message.
const messageEnvoye = new Object();
messageEnvoye.etat = false;
messageEnvoye.id = "wrapper-modal-confirmation";

 // FONCTION pour le message d'erreur à afficher
 function getCodeValidation(recElement) {
  // exemple : return document.getElementById("erreurPrenom"), re = regex
  return document.getElementById(recElement);
}
// Fonction pour contrôler les élements que je désire vérifier.
function validNombreCaractère (a, spanErr, re, msg) {
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {

    if (re.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
    } else if(!e.target.value){
      getCodeValidation(spanErr).innerText = msg.msg1;
    }else {
      getCodeValidation(spanErr).innerText = msg.msg2;
    }
  });
}
 // Fonction pour la vérification du mail
 function validEmailFonction (a, spanErr,re, msg) {
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {
    
    if (re.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
    } else if(!e.target.value){
      getCodeValidation(spanErr).innerText = msg.msg1;
    }else {
      getCodeValidation(spanErr).innerText = msg.email;
    }
  });
}
// Fonction pour la vérification de la date de naissance
function validBirthdateFunction(a, spanErr,re, msg) {
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {
    const regex = re;
    if (regex.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
    } else {
      getCodeValidation(spanErr).innerText = msg.date;
    }
  });
}
// Fonction pour la vérification de la quantité
function validQuantity(a, spanErr, re, msg){
  //a = inputId  & spanError = span message erreur a afficher si besoin, re = regex
  document.getElementById(a).addEventListener("input", function(e) {
    const regex = re;
    if (regex.test(e.target.value)) {
      getCodeValidation(spanErr).innerText = "";
    } else if(!e.target.value){
      getCodeValidation(spanErr).innerText = msg.msg1;
    } else {
      getCodeValidation(spanErr).innerText = msg.quantity;
    }
  });
}
 // Fonction pour la vérification de la quantité
 function validCheckCgu(a, spanErr, msg){
  //a = inputCheckbox  
  document.getElementById(a).addEventListener("input", function(e) {
    if (this.checked == false){
      document.getElementById(spanErr).innerText = msg.cgu;
    } else {
      document.getElementById(spanErr).innerText = "";
    }
  });
}


// Je lance toutes les fonction dont j'ai besoin pour vérifier mon formulaire avant le click du btn envoyer
//=========================================================================================================
// verification nom et prénom
validNombreCaractère(inputsId.prenom, spanErrorInputs.prenom, regexVerification.userName, messageError);
validNombreCaractère(inputsId.nom, spanErrorInputs.nom, regexVerification.userName, messageError);
// verification email
validEmailFonction(inputsId.email, spanErrorInputs.email, regexVerification.email, messageError);
// verification date de naissance
validBirthdateFunction(inputsId.birthdate, spanErrorInputs.birthdate, regexVerification.date, messageError);
// verification quantity
validQuantity(inputsId.quantity, spanErrorInputs.quantity, regexVerification.quantity, messageError);
// verification checkbox CGU
validCheckCgu(inputsId.cgu, spanErrorInputs.cgu, messageError);

// Je creer un fonction qui stock une valeur non sensible dans le localstorage.
function storageEtat(){
  return localStorage.setItem("etatMessage", true);
}
// Je creer une fonction pour afficher ma modal message envoyé.
function afficheMessage (){
  if(localStorage.etatMessage){
    let modalMessage = document.querySelector(".wrapper-modal-confirmation");
    modalMessage.style.display = 'block';
  }
}
// J'ecoute l'evenement submit et je relance les fonction a l'intèrieur.
//======================================================================
document.forms["formValid"].addEventListener("submit", function (e) {

  if (!regexVerification.userName.test(document.forms["reserve"][inputsId.prenom].value)) {
    e.preventDefault();
    return false
  } else if (!regexVerification.userName.test(document.forms["reserve"][inputsId.nom].value)) {
    e.preventDefault();
    return false
  } else if (!regexVerification.email.test(document.forms["reserve"][inputsId.email].value)) {
    e.preventDefault();
    return false
  } else if (!regexVerification.date.test(document.forms["reserve"][inputsId.birthdate].value)) {
    e.preventDefault();
    return false
  } else if (!regexVerification.quantity.test(document.forms["reserve"][inputsId.quantity].value)) {
    e.preventDefault();
    return false
  } else if (!document.forms["reserve"][inputsId.cgu].checked) {
    e.preventDefault();
    return false
  } else {
    storageEtat ()
    return true;
  }
})

// j'affiche le message après l'envoie !
afficheMessage();

// ===========================================
// ============== FIN DU SCRIPT ==============
// ===========================================