// always require the module youre trying to use
const snakeNames = require('snake-names');

console.log(snakeNames.random())

const randomName = snakeNames.random()

//always use backticks in order to use a variable in a console.log
console.log(`You should name your snake ${randomName}. Its a cool name.`)

//or you can do it this way too 
console.log(randomName, 'is also a cool name.')

const allSnakeNames = snakeNames.all
console.log(`These are all of the snakes we currently have in the shop: ${allSnakeNames}. Let me know if you want to purchase one.`)

const maleNames = snakeNames.male
console.log('These are all the male snakes i have:', maleNames)

const femaleNames = snakeNames.female
console.log('These are all the male snakes i have:', femaleNames)

// in the code below, In order to use this random number as an index to access the femaleNames array, 
//we want to extend this random number into a range with 0 as the minimum value 
//and the number of elements in the femaleSnakeNames array minus one as the max value. 
let randomIndex = Math.floor(Math.random() * femaleNames.length)
console.log("A great female snake name is:", femaleNames[randomIndex])