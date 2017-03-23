/*
	Logarithmic complexity - Bisection Search
		- search through a sorted list for a particular value
 */

// copy operation results in the order of growth/complexity of O(n) - not O(log n) - due to the copy operation
function bisectionSearch(arr, target) {
	// return true if the target is found, false otherwise
	if(arr.length == 0) return false;							// constant O(1)
	if(arr.length == 1) return arr[0] === target;				// constant O(1)
	let n = arr.length/2;										// constant O(1)
	if(arr[n] > target)											// constant O(1)
		return bisectionSearch(arr.slice(0, n), target);		// NOT constant, creates a copy of the list
	else
		return bisectionSearch(arr.slice(n), target);			// NOT constant
}


// Alternate version where you don't copy the elements, complexity of O(log n) - keep track of the high, low values
function bisectionSearchAlt(arr, target) {
	// cost at each point is constant - in this case the implementation has an impact on the complexity(we generally don't care)
	function helper(arr, target, low, high) {
		if(high == low) return arr[low] == target;
		let mid = Math.round((high + low)/2); // make sure it's an int
		if(arr[mid] == target) return true;
		if(arr[mid] > target) {
			if(low == mid) return false; // nothing left to search
			else return helper(arr, target, low, mid - 1);
		} else {
			return helper(arr, target, mid + 1, high);
		}
	}
	
	if(arr.length == 0) return false;
	
	return helper(arr, target, 0, arr.length - 1);
}


// Logorithmic Complexity - convert an int to a string
function intToAString(n) {
	let digits = '0123456789';
	if(n == 0) return '0';
	
	let result = [];
	while(n > 0) {
		result.unshift(digits[n % 10]);
		n = Math.floor(n/10);
		console.log(result);
	}
	return result.join('');
}