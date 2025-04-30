// This function capitalizes the first letter of every word in a sentence and converts the rest of the letters to lowercase.



// const sentence = "   heLLo     wORld   ";

// "   heLLo     wORld   ".trim()  // → "heLLo     wORld"

// "heLLo     wORld".split(/\s+/)  // → ["heLLo", "wORld"]

// word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// Let’s break that down for one word, "heLLo":

// word.charAt(0) → 'h'
// .toUpperCase() → 'H'
// word.slice(1) → 'eLLo'
// .toLowerCase() → 'ello'

// ["Hello", "World"].join(' ')  // → "Hello World"


function capitalizeWords(sentence) {
    return sentence
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

const result = capitalizeWords("   heLLo     wORld   ");
console.log(result); // Output: "Hello World"


