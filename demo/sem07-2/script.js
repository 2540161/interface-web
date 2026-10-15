let jour = 1;

switch (jour) {
  case 1:
    console.log("Lundi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 0:
  case 6:
    console.log("Weekend");
    break;
  default:
    console.log("Autre jour");
}



const carre = (x) => (x * x);

function appliquerOperation(nombre, fonction) {
  console.log(fonction(nombre));
}

appliquerOperation(4, carre);



class Auto {
  constructor(marque, couleur, vitesse) {
    this.marque = marque;
    this.couleur = couleur;
    this.vitesse = vitesse;
  }

  accelerer() {
    this.vitesse += 10;
  }
}

const maVoiture = new Auto("Kia", "Blanc", 100);
maVoiture.accelerer();
maVoiture.accelerer();

console.log(maVoiture.vitesse);



const fruits = ["Pomme", "Banane", "Orange"];

fruits.push("Poire");
fruits.pop();
console.log(fruits);



const nombres = [2, 5, 8, 11, 14];

console.log(nombres.map(n => n * n));
console.log(nombres.filter(n => n % 2 === 0));
console.log(nombres.find(n => n > 10));



setTimeout(() => {console.log("Bonjour")}, 2000);
const intervalId = setInterval(() => {console.log("Encore là ?")}, 3000);

setInterval(() => {clearInterval(intervalId)}, 10000);



let joueur = { nom: "Jérémie", age: 25, score: 120, niveau: "avancé" };
const {nom, score} = joueur;

console.log(nom);
console.log(score);

function afficherScore({nom, score}) {
  console.log(`${nom} a ${score} points`);
}

afficherScore(joueur);



const inventaireJoueur1 = ["Potion", "Fusil à pompe", "Pistolet"];
const inventaireJoueur2 = ["Sniper", "Potion", "Pioche"];
const inventaireTotal = [...inventaireJoueur1, ...inventaireJoueur2];

console.log(inventaireTotal);

joueur = { pseudo: "NoobMaster", vie: 100, niveau: 5 };
const joueurAmeliore = {
  ...joueur,
  vie: 150,
  niveau: 6
};

console.log(joueurAmeliore);