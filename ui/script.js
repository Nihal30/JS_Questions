console.log("js oS")

// 1 reversing a String 
// built in 

// const rs =function reverseString(str){
//     return str.split('').reverse().join();
// }
// console.log('rs', rs("12345"))

// normal

// const rs = function reverseString(str){
//     let reverse ='';

//     for(let i=str.length-1;i>=0;i--){
//         reverse += str[i];
//     }
//     return reverse
// }
// console.log('rs', rs("121"))


// 2 palindrome

// const P = function palindrome(str){
//     return str === str.split('').reverse().join('')
// }
// console.log('p', P("121"))


// normal 

// const p = function palindrome(str){
//     for(let i=0;i<str.length/2;i++){
//         if(str[i]!== str[str.length-1-i]) return false
//     }
//     return true;
// }
// console.log('p', P("121"))

// find max 

// const max = function maxLength(arr){
//     return Math.max(...arr);
// }


// normal 

// const max = function findMax(arr){
//     let max = arr[0];
//     for(let i=i;i<arr.length;i++){
//         if(arr[i]>max) max=arr[i];
//     }
//     return max;
// }

// 2nd Largest 

// const second = function sec(arr) {
//     let a = arr.sort((a, b) => b - a); // sort in descending order
//     return a[1]; // second element is second largest
// }

// console.log('second', second([1, 2, 4, 6, 5])); 

// normal 

// const sec= function sec(arr){
//     let max =-infinity ,second = -infinity ;
//     for(let num of arr){
//         if(num>max){
//             second = max;
//             max= num;
//         }else if(num >second && num !==max){
//             second = num;
//         }
//     }
//     return second;
// }

// remove duplicates 

// function remove(arr){
//     return [...new Set(arr)];
// }


// function removeDuplicates(arr){
//     let result [];
//     for(let i=0;i<arr.length;i++){
//         if(!result.include(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }


// factorial 

// const fac = function factorial(n){
//     if(n===0) return 1;
//     return n * factorial(n-1);
// }

// fibonacci sequence

// function fibonacci(n){
//     let arr =[0,1]
//     for(let i=2;i<n;i++){
//         arr[i] = arr[i-1]+arr[i-2];
//     }
//     return arr
// }
