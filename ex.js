//exo 1

let a = 2;
let b = "oui";
let c;

c = a;
a = b;
b = c;

console.log("a:", a, "b: ", b);


//exo 2

function multiplication (nb_1, nb_2){
    if (typeof nb_1 === 'number' && typeof nb_2 === 'number') return nb_1 * nb_2;
    else return "ce ne sont pas des chiffres";
}

console.log(multiplication(1,2));
console.log(multiplication("a", 2));

// exo 3

function bonjour (prenom, nom){
    return `Bonjour, ${prenom} ${nom} !`;
}

console.log(bonjour("Anya", "Lallart"));

// exo 4

function parite (nb){
    if (nb%2 == 0) return "paire";
    return "impaire";
}

console.log(parite(2));
console.log(parite(3));


// exo 5

function mettreAgeÀ30(objet) {
    objet.age = 30; 
    return objet;  
}

const utilisateur = {
    nom: "Doe",
    prenom: "John",
    age: 25
};

console.log("Avant :", utilisateur); 
const resultat = mettreAgeÀ30(utilisateur);
console.log("Après :", resultat); 
