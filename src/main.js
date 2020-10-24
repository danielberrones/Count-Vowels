function getString() {
    let userInput = document.getElementById("userText").value;
    document.getElementById("outputText").innerHTML = `You wrote: ${userInput}`;

    let inputLength = userInput.length;
    document.getElementById("outputLength").innerHTML = `Your sentence contains: ${inputLength} characters.`;
    // alert(userInput.length);
    // alert(userInput);


    const re = /[aeiou]/ig;
    let str = userInput;

    const totalVowels = str.match(re);

    if (totalVowels === null) {
        alert("Please enter a string");

    } else if (totalVowels.length === 1) {
        alert();
        document.getElementById("outputLength").innerHTML = `There is 1 vowel in "${str}"`;

    } else {
        document.getElementById("outputLength").innerHTML = `There are ${totalVowels.length} vowels in "${str}"`;
        
    }
}

// const userInput = getString();

// function countVowels(str) {
//     const re = /[aeiou]/ig;
//     const totalVowels = str.match(re);

//     if (totalVowels === null) {
//         return `Please enter a string.`

//     } else if (totalVowels.length === 1) {
//         return `There is 1 vowel in "${str}"`;

//     } else {
//         return `There are ${totalVowels.length} vowels in "${str}"`;
//     }

// }

// console.log(countVowels(userInput));