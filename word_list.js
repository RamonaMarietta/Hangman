const wordList = ["conscience", "patience", "passion", "sagesse", "amour"];

function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}
