window.onscroll = function() {
  var element = document.querySelector(".wealth-title");
  var windowWidth = window.innerWidth;
  var elementPosition = element.getBoundingClientRect().left;
  if (elementPosition <= (0.9 * windowWidth)) {
    element.style.visibility = "visible";
  }
} 
// Récupération de l'élément "wealth-title"
var wealthTitle = document.querySelector(".wealth-title");

// Récupération de l'élément "musk .wealth"
var muskWealth = document.querySelector(".musk .wealth");

// Écouteur d'événement pour le défilement horizontal
window.addEventListener("scroll", function() {
  // Vérification si la position horizontale de l'élément "musk .wealth" est supérieure à 765000px
  if (muskWealth.getBoundingClientRect().left > 765000) {
    // Ajout de la classe "sticky" à l'élément "wealth-title"
    wealthTitle.classList.add("sticky");
  } else {
    // Suppression de la classe "sticky" de l'élément "wealth-title"
    wealthTitle.classList.remove("sticky");
  }
});
