/*
	using recursion to perform integer multiplication using addition

 */
function multiplyNumbers(a, b) {
	// without recursion
	let result = 0;
	while(b > 0) {
		result += a;
		b--;
	}
	return result;
}


function multiplyNumbersRecursively(a, b) {
	// add a to itself b times
	if(b === 1) return a; // base case
	return a + multiplyNumbers(a, b - 1);
}

/*
	Using recursion to compute n factorial
	
 */

// without recursion
function factorial(n) {
	let result = 1;
	while(n > 0) {
		result *= n;
		n--;
	}
	return result;
}

function factorialRecursion(n) {
	if(n === 1) return 1; // base case
	return n * factorialRecursion(n - 1);
}


/*
	Using recursion to solve Towers of Hanoi

 */
function move(from, to) {
	console.log(`Move from ${from} to ${to}`);
}

let count = 0;
function towerOfHanoi(n, from, to, spare) {
	if(n === 1){
		move(from, to);
		count++;
	}
	else {
		towerOfHanoi(n - 1, from, spare, to);
		towerOfHanoi(1, from, to, spare);
		towerOfHanoi(n - 1, spare, to, from);
	}
	return count;
}


/*
	Using recursion to solve Fibonacci number
	 
	 - assumes n is a integer >= 0
	 - uses two base cases

 */
function fib(n) {
    if(n === 0) return 0;
	if(n === 1 || n === 2) return 1;
	return fib(n - 1) + fib(n - 2);
}


/*
	Using recursions to solve Palindromes
 */

// without recursion
function palindrome(str) {
	let temp = str.replace(/[\W]/gi, '').toLowerCase();
	if(temp.length <= 1) return true;
	return temp === temp.split('').reverse().join('');
}

// using recursion
function palindromeRecursion(str) {
	let temp = str.replace(/[\W]/gi, '').toLowerCase();
	
	function isPalindrome(s) {
		if(s.length <= 1) return true;
		// if the first and last chars are equal, check the remainder of the string
		return (s[0] === s[s.length - 1]) && isPalindrome(s.slice(1, s.length - 1));
	}
	return isPalindrome(temp);
}
 

