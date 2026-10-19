const monElement = document.querySelector("div.dernier")
console.log(monElement)

const listeLettre = document.querySelectorAll("div ul li")
listeLettre.forEach((lettre) => {
    lettre.classList.add("visible")
})
console.log(listeLettre)