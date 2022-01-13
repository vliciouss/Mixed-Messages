//add the text into arrays

let quotes1 = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
let quotes2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let quotes3 = ['find true love', 'drink until you die', 'die in a car accident', 'become a CEO', 'save a life', 'get a nobel prize', 'have a threesome', 'get stoned', 'adopt a cat', 'have a super power', 'become immortal', 'be killed by a shark', 'have a child', 'adopt a dog', 'find cure to cancer', 'buy a new house', 'become homless'];


//returns a random number from 0 to array.length;

function randomNo(array) {
    return Math.floor(Math.random() * array.length);
}


//store the data into variables

let year = new Date().getFullYear() + Math.floor((Math.random() * 9) + 1);
let date = quotes1[randomNo(quotes1)];
let month = quotes2[randomNo(quotes2)];
let quote = quotes3[randomNo(quotes3)];


//logs a random message from quotes;

if (date > 28 && month === 'February') {
    console.log(`On 28 of February ${year} you will ${quotes3[randomNo(quotes3)]}.`);
} else if (date > 30 && month === 'April') {
    console.log(`On 30 of April ${year} you will ${quotes3[randomNo(quotes3)]}.`);
} else if (date > 30 && month === 'June') {
    console.log(`On 30 of June ${year} you will ${quotes3[randomNo(quotes3)]}.`);
} else if (date > 30 && month === 'September') {
    console.log(`On 30 of September ${year} you will ${quotes3[randomNo(quotes3)]}.`);
} else if (date > 30 && month === 'November') {
    console.log(`On 30 of November ${year} you will ${quotes3[randomNo(quotes3)]}.`);
} else {
    console.log(`On ${date} of ${month} ${year} you will ${quotes3[randomNo(quotes3)]}.`);
}
    