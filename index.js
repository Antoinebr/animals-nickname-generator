
process.argv.splice(0, 2);

const [numOfNicknamesToBeGenerated = 100] = process.argv;


const animals = require('./animals.json');

const colors = ['Blue','Red','White','Green','Black','Violet'];

const getRandomColor = () => colors[Math.floor((Math.random() * colors.length) + 0)];

const getRandomAnimal = () => animals[Math.floor((Math.random() * animals.length) + 0)];


const nickNames = new Set();

while( nickNames.size < numOfNicknamesToBeGenerated){

    nickNames.add(`${getRandomColor()} ${getRandomAnimal()}`);
}


for( const nickname of [...nickNames]){

    console.log(nickname);

}

