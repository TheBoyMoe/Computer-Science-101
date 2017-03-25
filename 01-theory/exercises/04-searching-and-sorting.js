// Linear search -  unsorted list - walk through each element until match found
// complexity O(n)

function unsortedSearch(arr, target) {
	if(arr.length < 1) return false;
	let found = false;
	for(let i = 0; i < arr.length; i++) {
		if(target === arr[i]) {
			found = true;
			break;
		}
	}
	return found;
}


// Linear search - sorted list - doesn't work otherwise
// complexity O(n)
function sortedSearch(arr, target) {
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === target) return true;
		if(arr[i] > target) break; // if val is > target, no point checking any further
	}
	return false;
}

/*
	SORTING
 */
// Bubble Sort - compare consecutive values
// looping stops when you can iterate through the list and not perform any swaps
// if you perform at least one swap, you repeat the loop and iterate through the list
function bubbleSort(arr) {
	let swap = false;
	while(!swap) { // performed O(n) where n == list length
		swap = true;
		let temp;
		for(let i = 1; i < arr.length; i++){ // performed O(n)
			if(arr[i - 1] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
				swap = false;
			}
		}
	}
	return arr;
}


// Selection Sort - complexity O(n^2) - quadratic complexity

function selectionSort(arr) {
	let count = 0, temp;
	while(count < arr.length){ // loops n times
		for(let i = 0; i < arr.length; i++){ // loos n times
			if(arr[count] < arr[i]) {
				// swap the two
				temp = arr[i];
				arr[i] = arr[count];
				arr[count] = temp;
			}
		}
		count++;
	}
	return arr;
}



