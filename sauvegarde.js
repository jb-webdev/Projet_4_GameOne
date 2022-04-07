const messageConfirmation = document.querySelector(".wrapper-modal-confirmation");

// si on change false a true on affiche le message de validation

const etatMessageValidation = false; // Je creer un etat d'affichage.

function afficherMessageValidation (etat){
  if (etat){
    messageConfirmation.style.display = "block";
  } else {
    messageConfirmation.style.display = "none";
  }
}

afficherMessageValidation(etatMessageValidation);





document.getElementById("formValid").addEventListener("submit", function(e){
  let erreur;
  /* je recupere mes elements un par un */
  let pseudo = document.getElementById("first");
  
  if (!pseudo.value){
      erreur ="veuillez renseigner un pseudo";
  }
  if (erreur) {
      /*on empeche le comportement par default du formulaire */
      e.preventDefault();
      /*on recupere notre element erreur dans le dom et on inscrit le message d'erreur correspondant */
      alert ('====== ERROR =====')
      /*je rajoute un return false pour être sur que plus rien ne ce passe après la function */
      return false;
  } else {
      alert ('Formulaire envoyé !')
  }
})
// ===================================


f
