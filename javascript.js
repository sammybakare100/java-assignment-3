//STRING MANIPULATION FUNCTIONS


// Reserse a string 
function reverseString(str) {
    return str.split (``).reverse().join(``);
}

// count characters 
function countCharacters(str) {
    return str.length;
}

// Capitalize Words 
function capitalizeWords(sentence) {
    return sentence
    .split(``)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(``);
}

//ARRAY FUNTIONS

// Find Maximum and Minimum

function findMax(arr){
    return Math.max(...arr)
}
function findMin(arr){
    return Math.min(...arr);
}

//Sum of Array
 
function sumArray(arr) {
    return arr.reduce ((sum, num)  => sum + num, 0)
}

// Filter Array
function filterArray(arr, conditionFunc) {
    return arr.filter(conditionFunc);
}

// MATHEMATICAL FUNTIONS
 //Factorial
 function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fibonacci sequence
function fibonacci(n) {
    let seq = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) seq.push(0);
        else if (i === 1) seq.push(1);
        else seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}