let classe = ["Andy","Alexis","Alain","Charles","Farhad","Ilyas","William","Tania", "Anthony"]
let i=0
while ( i < 9) {
    console.log("Bonjour " + classe[i]);
    i++
}

let fruits = ["kiwi", "pomme", "poire", "cerise", "fraise", "banane"]
while ( fruits.length > 0) {
    fruits.pop()
    console.log(fruits)
}

let panierLegumes = ["Brocolis", "Haricots", "Chou-fleur", "Petit pois"];
let longueur = panierLegumes.length;
let caisseLegumes = [];
while (i < longueur) {
    caisseLegumes.push(panierLegumes[0])
    panierLegumes.splice(0,1)
    i++;
}
console.log(panierLegumes);
console.log(caisseLegumes);

let me = prompt("Qu'est ce qui est jaune et qui attend?")
while (me != "Jonathan") {
    me = prompt("Qu'est ce qui est jaune et qui attend?")
}
alert("GG")

do {
    me = prompt("Qu'est ce qui est jaune et qui attend?")
    if (me == "Jonathan") {
        alert("GG")
    } else {
        alert("C'est pas GG")
    }
} while (me != "Jonathan")

let date = new Date();
let ourYear = date.getFullYear();
console.log(ourYear);
let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
let essai;
let trys = 3;
let answer = ourYear - randomYear
while (trys > 0) {
    essai = prompt(`Si je suis né en ${randomYear}, quel age ai-je aujourd'hui ?`)
    trys--;
    if (essai == answer) {
        trys =0
    }
}
if (essai == answer) {
    alert ("Bonne réponse!")
} else {
    alert(`Il te reste ${trys} essais`)
}

let panierFruits = [];

while (panierFruits.length != 8) {
    panierFruits.push(prompt("Remplissez le panier de fruit, jusqu'a obtenir 8 fruits"));
    alert(panierFruits); //fin
}

let question = prompt("desire tu retirer un fruit ? ");

let panierFruit = [];
let reponse;
let index = false;
let compteur = 0;

while (index == false) {
    if (compteur < 8) {
        reponse = prompt("Donnez moi un fruit");
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.push(reponse);
        compteur++;
    }

    if (compteur == 8) {
        alert(panierFruit);
        reponse = prompt('Voulez vous retirer un fruit ?');
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.splice(panierFruit.indexOf(reponse), 1);

        if (panierFruit.indexOf(reponse) == -1) {
            index = true;
        }
    }
}

alert('merci bonne appétit');
alert(`ceci est le derniere etat de votre panier: ${panierFruit}`);