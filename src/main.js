function getString() {
    let userInput = document.getElementById("userText").value;

    let inputLength = userInput.length;
    document.getElementById("outputLength").innerHTML = `Your sentence contains: ${inputLength} characters.`;

    const re = /[aeiou]/ig;
    let str = userInput;

    const totalVowels = str.match(re);

    if (totalVowels === null) {
        alert("Please enter a string");
        document.getElementById("outputText").innerHTML = 'Please enter a string';

    } else if (totalVowels.length === 1) {
        document.getElementById("outputText").innerHTML = `You wrote: ${str}`;
        document.getElementById("outputLength").innerHTML = `There is 1 vowel in "${str}"`;
        
    } else {
        document.getElementById("outputText").innerHTML = `You wrote: ${str}`;
        document.getElementById("outputLength").innerHTML = `There are ${totalVowels.length} vowels in "${str}"<br>They are ${totalVowels}`;

    }
}
