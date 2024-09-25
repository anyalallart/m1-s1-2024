const _ = require('lodash');
const fs = require('fs').promises;

// 1

const number = [3, 8, 2, 1, 9, 4, 6, 7, 5, 8];

const sortedNumber = _.sortBy(number); // sorts by age
console.log(sortedNumber);

// 2
function removeDuplicate(myArray){
    return _.uniq(myArray);
}

function removeDuplicate2(myArray){
    const result = [];

    for (let i = 0; i < myArray.length; i++){
        if (result.indexOf(myArray[i]) === -1){
            result.push(myArray[i])
        }
    }

    return result;
}

console.log(number);
console.log(removeDuplicate(number));


// 3
function randomNumber (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random();

            if (number < 0.5) {
                reject(number);
            } else {
                resolve(number);
            }
        }, 2000);
    });
}

console.log('random number :');
const resul = await randomNumber();
console.log(resul);


//4
async function readFile(filename){
    const data = await fs.readFileSync(filename, 'utf-8');

    return data
}

console.log(await readFile('./data.json'));