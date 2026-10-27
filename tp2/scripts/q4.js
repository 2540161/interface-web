/**
 * Question 4 - Manipulation du DOM
 * Navigation, Insertion et Clonage
 */

/**
 * Initialise toutes les fonctionnalités de la page
 */
function initialiser() {
    // TODO: Étape 1 - Navigation entre les nœuds
    // Récupérez #fruits et #out
    // Utilisez firstElementChild, lastElementChild, children[0].nextElementSibling
    // Affichez : "Premier : X | Dernier : Y | Après le 1er : Z"

    const fruits = document.getElementById("fruits");
    const out = document.getElementById("out");

    out.textContent = `Premier : ${fruits.firstElementChild.textContent} | Dernier : ${fruits.lastElementChild.textContent} | Après le premier : ${fruits.children[0].nextElementSibling.textContent}`

    // TODO: Étape 2 - Création et insertion d'éléments
    // Au clic sur #addHead, créez un <p> avec "(tête)" et utilisez prepend()
    // Au clic sur #addTail, créez un <p> avec "(fin)" et utilisez append()

    const zone = document.getElementById("zone");
    const addHead = document.getElementById("addHead");
    const addTail = document.getElementById("addTail");

    addHead.addEventListener("click", () => {
        const p = document.createElement("p");
        p.textContent = "(tête)"
        zone.prepend(p);
    })

    addTail.addEventListener("click", () => {
        const p = document.createElement("p");
        p.textContent = "(fin)"
        zone.append(p);
    })

    // TODO: Étape 3 - Clonage, remplacement et suppression
    // Au clic sur #cloner, clonez le .card avec cloneNode(true), modifiez son texte et ajoutez-le
    // Au clic sur #remplacer, remplacez la première .card avec replaceWith()
    // Au clic sur #vider, supprimez toutes les .card avec remove()

    const cloner = document.getElementById("cloner");
    const remplacer = document.getElementById("remplacer");
    const vider = document.getElementById("vider");
    const carte = document.querySelector(".card");
    const zoneCartes = document.getElementById("cards");

    cloner.addEventListener("click", () => {
        const nouvelleCarte = carte.cloneNode(true);
        nouvelleCarte.textContent = `Card #${zoneCartes.children.length}`;
        zoneCartes.append(nouvelleCarte);
    })

    remplacer.addEventListener("click", () => {
        const premiereCarte = document.querySelector(".card");
        const nouvelleCarte = carte.cloneNode(true);
        nouvelleCarte.textContent = `Card #${zoneCartes.children.length}`;
        premiereCarte.replaceWith(nouvelleCarte);
    })

    vider.addEventListener("click", () => {
        document.querySelectorAll(".card").forEach((card) => {
            card.remove();
        });
    })

    // TODO: Étape 4 - Insertion à une position donnée
    // Au clic sur #ins2, créez un <li> "Étape 1.5" et insérez-le avant steps.children[1] avec before()

    const ins2 = document.getElementById("ins2");
    const steps = document.getElementById("steps");

    ins2.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = "Étape 1.5";
        steps.children[1].before(li);
    })
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
