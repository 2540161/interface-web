//ex02

const mot = prompt("Entrez un mot");
const longueur = mot.length;

switch (longueur) {
  case 1:
    console.log("ex02: 1 caractère");
    break;
  case 2:
  case 3:
  case 4:
    console.log("ex02: 2 à 4 caractères");
    break;
  case 5:
    console.log("ex02: 5 caractères");
    break;
  default:
    console.log("ex02: plus de 5 caractères");
}

//ex03

for (let multiple = 0; multiple <= 500; multiple += 10) {
  if (multiple !== 0) {
    console.log("ex03: " + multiple);
  }
}


//ex04

/*function calculerAge(anneeNaissance) {
    let anneeActuelle = new Date().getFullYear();
    return anneeActuelle - anneeNaissance;
}*/

const calculerAge = (anneeNaissance) => new Date().getFullYear() - anneeNaissance;

console.log(`ex04: Votre âge est ${calculerAge(2006)} ans.`);


//ex05

const moi = {
    prenom: "Jérémie",
    nom: "Beaulne",
    age: 18,
    jeuVideo: "Minecraft",
    resume() {
        return `Je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans et je joue à ${this.jeuVideo}`;
    }
}

console.log(`ex05: ${moi.resume()}`);