// messages object
let mixedMessages = {
    // arrays to create a nonsensical sentence
    character: ['Sahith', 'Nikhil', 'Kashish', 'Shiva', 'Neo', 'Shay', 'Paviesh', 'Sheevam', 'Parth', 'Yuvan'],
    verbs: ['jumping at', 'a bug who gave a hug to', 'able to talk with', 'taking a walk to', 'playing pool with', 'at Halal Guys with'],
    connectors: ['a park', 'the bear', 'a computer', 'all the bees'],
    // Methods to get a random element from each array
    getRandChar() {
        return this.character[Math.floor(Math.random() * this.character.length)];
    },
    getRandVerb() {
        return this.verbs[Math.floor(Math.random() * this.verbs.length)];
    },
    getRandConnector() {
        return this.connectors[Math.floor(Math.random() * this.connectors.length)];
    }
}
// arrow function to display the nonsensical sentence
const display = () => {
    // calling object methods to return a random element
    let char = mixedMessages.getRandChar();
    let verb = mixedMessages.getRandVerb();
    let connec = mixedMessages.getRandConnector();
    // return the sentence
    return `${char} was ${verb} ${connec}`;
}
// to log the random sentence
console.log(display());