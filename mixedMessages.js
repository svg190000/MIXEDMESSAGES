let mixedMessages = {
    character: ['Sahith', 'Nikhil', 'Kashish', 'Shiva', 'Neo', 'Shay', 'Paviesh', 'Sheevam', 'Parth', 'Yuvan'],
    verbs: ['jumping at', 'a bug who gave a hug to', 'able to talk with', 'taking a walk to', 'playing pool with', 'at Halal Guys with'],
    connectors: ['a park', 'the bear', 'a computer', 'all the bees'],
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
const display = () => {
    let char = mixedMessages.getRandChar();
    let verb = mixedMessages.getRandVerb();
    let connec = mixedMessages.getRandConnector();
    return `${char} was ${verb} ${connec}`;
}
console.log(display());