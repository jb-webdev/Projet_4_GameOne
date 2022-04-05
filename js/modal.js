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


/* ETAP 1 ON FERME LA MODAL AU CLICK */

/* on recupèrer notre élement du DOM  par la classe avec querySelector*/
const modalClose = document.querySelector(".close");
/*  on creer notre fonction 
    on passe display none au click sur le span pour faire disparaître notre modal de l'affichage
*/
function closeButton() {
  modalbg.style.display = "none";
}

// ON FERME LA MODAL DE CONFIRMATION D'ENVOIE A L'UTILISATEUR
// Je crer une fonction pour fermer la modale qui change le paramitre de display en none.
function closeMessageValidationModal() {

  const modalMessageValidation = document.querySelector(".wrapper-modal-confirmation");
  modalMessageValidation.style.display = "none";
}
// Etape deux on ecoute les évenements des formulaires pour validé les entrées
/* ====== Input Prenom ====== */
/* ====== on controle qu'il contient aux minimum 2 caractère */
document.getElementById("first").addEventListener("input", function() {

  const inputTxtPrenom = document.getElementById('first');
  const paragrapheError = document.getElementById("erreurPrenom");
  const ErroMessagePrenom = "Doit contennir deux caractère minimum";

  if (this.value.length <2){
    paragrapheError.innerHTML = ErroMessagePrenom;
    inputTxtPrenom.setCustomValidity(ErroMessagePrenom);
  } else {
    paragrapheError.innerHTML = "";
  }
})

/* ====== Input nom ====== */
/* ====== on controle qu'il contient aux minimum 2 caractère */
document.getElementById("last").addEventListener("input", function() {

  const inputTxtNom = document.getElementById('last');
  const errorNom = document.getElementById("erreurNom");
  const ErroMessageNom = "Veuillez entrer 2 caractères ou plus pour le champ du nom";

  if (this.value.length <2){
    errorNom.innerHTML = ErroMessageNom;
    inputTxtNom.setCustomValidity(ErroMessageNom);
  } else {
    errorNom.innerHTML = "";
  }
})









// SCRIPT essai pour le moment 
/*ETAP 2 ON VALID LE FORMULAIRE */

document.getElementById("formValid").addEventListener("submit", function(e){
  e.preventDefault();
  /* je declare une variable erreur */
  let erreur;
  /* je recupere mes elements un par un */
  let prenom = document.getElementById("first").value;
  let nom = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;

  if (prenom.length <= 2){
    erreur ="Au moins 2 caractère minimum";
    document.getElementById("erreurPrenom").innerHTML = erreur;
    return false;
    }
  if (nom.length <= 2){
    erreur ="Au moins 2 caractère minimum";
    document.getElementById("erreurNom").innerHTML = erreur;
    return false;
    } 
  if (quantity.length == " ") {
    erreur ="veuillez rentre une valeur merci !";
    document.getElementById("erreurQuantity").innerHTML = erreur;
    return false;
  }
    
    
    else {
    alert ('Merci pour votre inscription le Formulaire est envoyé !')
    closeButton();
  }

})
