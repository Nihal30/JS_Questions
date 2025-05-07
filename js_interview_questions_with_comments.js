// 1. Reverse a String
// ✅ With built-ins
function reverseString(str) {
  // Convert string to array, reverse it, then join back to string
  return str.split('').reverse().join('');
}

// 🔁 Without built-ins
function reverseString(str) {
  let reversed = '';
  // Loop from end to start of string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Append each character in reverse order
  }
  return reversed;
}

// 2. Check Palindrome
// ✅ With built-ins
function isPalindrome(str) {
  // Compare string with its reversed version
  return str === str.split('').reverse().join('');
}

// 🔁 Without built-ins
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    // Compare characters from start and end
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

// 3. Find Largest Number
// ✅ With built-ins
function findMax(arr) {
  // Use spread operator and Math.max to get the max number
  return Math.max(...arr);
}

// 🔁 Without built-ins
function findMax(arr) {
  let max = arr[0]; // Initialize with first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]; // Update max if current is greater
  }
  return max;
}

// 4. Find Second Largest Number
// ✅ With built-ins
function secondLargest(arr) {
  let unique = [...new Set(arr)]; // Remove duplicates
  unique.sort((a, b) => b - a);   // Sort descending
  return unique[1];               // Return second element
}

// 🔁 Without built-ins
function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}

// 5. Remove Duplicates
// ✅ With built-ins
function removeDuplicates(arr) {
  // Set only allows unique values
  return [...new Set(arr)];
}

// 🔁 Without built-ins
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // Push only if not already present
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 6. Check Anagram
// ✅ With built-ins
function isAnagram(a, b) {
  // Sort both strings and compare
  return a.split('').sort().join('') === b.split('').sort().join('');
}

// 🔁 Without built-ins
function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  let count = {};
  for (let char of a) count[char] = (count[char] || 0) + 1; // Count chars in a
  for (let char of b) {
    if (!count[char]) return false; // Char not found
    count[char]--;
  }
  return true;
}

// 7. Count Character Frequency
// ✅ With built-ins
function countChars(str) {
  return [...str].reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1; // Count each char
    return acc;
  }, {});
}

// 🔁 Without built-ins
function countChars(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}

// 8. FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log('FizzBuzz'); // Multiple of 3 and 5
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

// 9. Flatten Nested Array
// ✅ With built-ins
function flattenArray(arr) {
  return arr.flat(Infinity); // Flattens array completely
}

// 🔁 Without built-ins
function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten sub-array
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// 10. Debounce
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer); // Clear previous timer
    timer = setTimeout(() => fn.apply(this, args), delay); // Delay call
  };
}

// 11. Throttle
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args); // Call only if limit passed
    }
  };
}

// 12. Factorial (Recursive)
function factorial(n) {
  if (n === 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

// 13. Fibonacci Sequence
// ✅ Iterative
function fibonacci(n) {
  let arr = [0, 1]; // Start of sequence
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]; // Next number = sum of previous two
  }
  return arr;
}

// 🔁 Recursive
function fibonacciRecursive(n) {
  if (n <= 1) return n; // Base case
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2); // Recursive sum
}

// 14. Check if Array is Sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false; // If any item smaller than previous
  }
  return true;
}

// 15. Shuffle Array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

// 16. Sum of Array Elements
// ✅ With built-ins
function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0); // Accumulate sum
}

// 🔁 Without built-ins
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 17. Intersection of Two Arrays
// ✅ With built-ins
function intersection(arr1, arr2) {
  return arr1.filter(val => arr2.includes(val)); // Common elements
}

// 🔁 Without built-ins
function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// 18. Custom .map()
Array.prototype.customMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this)); // Apply callback to each element
  }
  return result;
}

// 19. Convert to Title Case
// ✅ With built-ins
function toTitleCase(str) {
  return str.toLowerCase().split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(' ');
}

// 🔁 Without built-ins
function toTitleCase(str) {
  let result = '';
  let capitalize = true;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (capitalize && ch !== ' ') {
      result += ch.toUpperCase(); // Capitalize first character of word
      capitalize = false;
    } else {
      result += ch.toLowerCase();
    }
    if (ch === ' ') capitalize = true; // Next char should be capital
  }
  return result;
}

// 20. Find Missing Number from 1 to N
// ✅ With formula
function findMissing(arr, n) {
  const expected = (n * (n + 1)) / 2; // Sum of first N numbers
  const actual = arr.reduce((sum, num) => sum + num, 0); // Actual sum
  return expected - actual;
}

// 🔁 Without built-ins
function findMissing(arr, n) {
  let expected = (n * (n + 1)) / 2;
  let actual = 0;
  for (let i = 0; i < arr.length; i++) {
    actual += arr[i];
  }
  return expected - actual;
}