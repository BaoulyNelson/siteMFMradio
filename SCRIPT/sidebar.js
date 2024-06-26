// Fonction pour ouvrir ou fermer le panneau
function togglePanel() {
    var sidePanel = document.getElementById('sidePanel');
    var toggleButton = document.getElementById('togglePanel');

    // Vérifie si le panneau est ouvert
    var isOpen = sidePanel.classList.contains('show');

    if (isOpen) {
      // Si le panneau est ouvert, le ferme
      sidePanel.classList.remove('show');
      toggleButton.innerHTML = '&#9776;'; // Change l'icône en menu
    } else {
      // Si le panneau est fermé, l'ouvre
      sidePanel.classList.add('show');
      toggleButton.innerHTML = '&times;'; // Change l'icône en croix de fermeture
    }
  }
  
// Fonction pour fermer le panneau
function closePanel() {
    var sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.remove('show'); // Ferme le panneau
    document.getElementById('togglePanel').innerHTML = '&#9776;'; // Change l'icône en menu
}

// Ajoute un écouteur d'événement au clic sur le bouton de bascule
document.getElementById('togglePanel').addEventListener('click', function() {
    togglePanel(); // Appelle la fonction pour ouvrir ou fermer le panneau
});

// Ajoute un écouteur d'événement au clic sur le bouton de fermeture
document.getElementById('closeButton').addEventListener('click', function() {
    closePanel(); // Appelle la fonction pour fermer le panneau
});

// Détermine la largeur du panneau en fonction de la taille de l'écran
function adjustPanelWidth() {
    var sidePanel = document.getElementById('sidePanel');
    // Vérifie la largeur de l'écran
    if (window.innerWidth <= 768) {
        // Si l'écran est petit (largeur <= 768px), ouvre le panneau à 100%
        sidePanel.style.width = '100%';
    } else {
        // Si l'écran est grand (largeur > 768px), ouvre le panneau à 50%
        sidePanel.style.width = '50%';
    }
}

// Appelle la fonction pour ajuster la largeur du panneau lors du chargement de la page
window.addEventListener('load', adjustPanelWidth);
// Appelle la fonction pour ajuster la largeur du panneau lors du redimensionnement de la fenêtre
window.addEventListener('resize', adjustPanelWidth);

// Ajoute un écouteur d'événement aux liens à l'intérieur du panneau pour fermer le panneau
var sidePanelLinks = document.querySelectorAll('#sidePanel a');
sidePanelLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        closePanel(); // Appelle la fonction pour fermer le panneau
    });
});

// Sélection du switch personnalisé
var customSwitch = document.getElementById('customSwitch');

// Ajout d'un écouteur d'événement au changement de l'état du switch
customSwitch.addEventListener('change', function() {
    // Fermer le panneau (ou exécuter toute autre action que vous souhaitez)
    closePanel();
});


// Ajoute un écouteur d'événement au clic sur l'icône de recherche dans la barre de navigation
document.getElementById('search-icon').addEventListener('click', function() {
    togglePanel(); // Appelle la fonction pour ouvrir ou fermer le panneau
});
