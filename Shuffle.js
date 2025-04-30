// This function shuffles an array randomly — meaning it rearranges the elements into a new
// random order without changing the original array.

// It uses the Fisher-Yates shuffle algorithm, which is an efficient and fair way to randomly shuffle an array.

// const result = array.slice();
// slice() creates a copy of the original array.

// This ensures the original array remains unchanged.
// for (let i = result.length - 1; i > 0; i--)
//     Start from the last element of the array (i = last index)

//     Go backward (i--) until the first element

//     This is needed to perform a fair shuffle from end to beginning

//     🎲 const j = Math.floor(Math.random() * (i + 1));
//     Math.random() gives a number between 0 and 1 (not including 1)

//     Math.random() * (i + 1) gives a number from 0 to i

//     Math.floor(...) makes it a whole number (index)
//     [result[i], result[j]] = [result[j], result[i]];
// This is destructuring assignment to swap elements at positions i and j
// After all swaps, it returns the shuffled copy of the array.

function shuffle(array) {
  const result = array.slice(); // make a copy
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
