function getString() {
    const userInput = prompt("Type a string: ");
    return userInput;
}

const userInput = getString();

function countVowels(str) {
    const re = /[aeiou]/ig;
    const totalVowels = str.match(re);

    if (totalVowels === null) {
        return `Please enter a string.`

    } else if (totalVowels.length === 1) {
        return `There is 1 vowel in "${str}"`;

    } else {
        return `There are ${totalVowels.length} vowels in "${str}"`;
    }

}

console.log(countVowels(userInput));