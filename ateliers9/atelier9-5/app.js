// Classe Jeu
class Jeu {
  constructor() {
    this.score = 0;
  }

  ajouterPoints(n) {
    this.score += n;

    const evenement = new CustomEvent("scoreChange", {
      detail: {score: this.score}
    });

    document.dispatchEvent(evenement);
    //Créer et Émettre un événement métier scoreChange
    // on veut transmettre le score actuel avec l'événement
    // utiliser un objet detail contenant le score avec le format
    // { score: this.score }
  }

  reset() {
    this.score = 0;

    const evenement = new CustomEvent("initScore", {
      detail: {score: this.score}
    });

    document.dispatchEvent(evenement);
    //Créer et Émettre un événement métier initScore
  }
}

// --- Code principal ---
const jeu = new Jeu();
const affichage = document.getElementById('affichage');
const btnAdd = document.getElementById('btnAdd');
const btnReset = document.getElementById('btnReset');

// Écoute de les événements personnalisé, modifier affichage pur y inscrire
// le score ou le texte initial avec le format "Score : X"

document.addEventListener("scoreChange", (event) => {
  affichage.textContent = `Score : ${event.detail.score}`;
});

document.addEventListener("initScore", () => {
  affichage.textContent = `Score : -`;
});

jeu.reset();

// Boutons
btnAdd.addEventListener('click', () => {
  jeu.ajouterPoints(10);
});

btnReset.addEventListener('click', () => {
  jeu.reset();
});
