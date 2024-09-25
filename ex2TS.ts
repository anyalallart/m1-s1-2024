import * as fs from 'fs/promises';

//1
interface Human {
    id: number;        
    firstName: string;  
    lastName: string;   
}

const human:Human = {
    id: 1,
    firstName: "Anya",
    lastName: "Lallart"
}

// 2 
interface Cat {
    id: number;        
    name: string;  
    ownerId: number;   
}

const cat:Cat = {
    id: 1,
    name: "Brigand",
    ownerId: 1
}

// 3

async function readJsonFile(filename: string) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        const json = JSON.parse(data); 
        return json;
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier :', error);
    }
}

(async () => {
    const jsonData = await readJsonFile('./cat-data.json'); // Attendre la résolution de la promesse
    console.log('Contenu du fichier JSON :', jsonData); // Afficher les données
})();


// 4
function catOwners(cat: Cat, humans: Human[]): Human | undefined { 
    return humans.find(human => human.id === cat.ownerId);
}

(async () => {
    try {
        const jsonData = await readJsonFile('./cat-data.json'); 
        const cats: Cat[] = jsonData.cats; 
        const humans: Human[] = jsonData.humans;

        cats.forEach(element => {
            let owners = catOwners(element, humans);
            if (owners) console.log(`Le propriétaire de ${element.name} est ${owners.firstName} ${owners.lastName}.`);
            else console.log(`Le chat ${element.name} n'a pas de propriétaire`)
        });

    } catch (error) {
        console.error('Erreur dans le traitement des données JSON:', error);
    }
})();


// 5
function getCatWOOwner(humans: Human[], cats: Cat[]): Cat[]{
    return (cats.filter(cat => !cat.ownerId));
}


// 6
function getCatsNb(human: Human, cats:Cat[]): number{
    return cats.filter(cat => cat.ownerId === human.id).length;
}

