// Etape 1: Selectionner les elts necessaires
let btn = document.querySelector(".mode");
let mots = document.querySelector("span");

// Etape 2: Realiser une function qui permttra changer de theme
function changerTheme() {
  if (document.body.classList.contains("dark")) {
    //Si la classe dark est dans l'elt body (true(theme clair))

    document.body.removeAttribute("class"); // retire toutes les class de l'elt body
    mots.textContent = "Thème sombre"; // changer le texte du bouton
  } else {
    //sinon le classe "dark" n'est pas dans le body (false(theme sombre))
    document.body.className = "dark"; // ajoute la classe "dark" à l'elt body
    mots.textContent = "Thème clair"; // changer le texte du bouton
  }
}
