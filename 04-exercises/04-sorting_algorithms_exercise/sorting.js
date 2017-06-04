/*
    References:
    [1] http://codingmiles.com/sorting-algorithms-insertion-sort-using-javascript/
    [2] https://www.nczonline.net/blog/tag/algorithms/
    [3] http://www.codexpedia.com/javascript/javascript-quick-sort-implementation/
    [4] https://en.wikibooks.org/w/index.php?title=Special:Search&search=Algorithm+Implementation%2FSorting%2F&searchToken=3qirj9q10lhftjtnzaifxinxi
    [5] https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
    [6] https://github.com/benoitvallon/computer-science-in-javascript/tree/master/sorting-algorithms-in-javascript
    [7] https://visualgo.net/en (visualize the sorting algorithms)
    
 */
"use strict";

// 1. Implement bubble sort. Your function should accept an array and return an array of sorted values.
const bubbleSort = (array)=>{
    let swap = false;
    while (!swap){
        swap = true;
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i + 1]){
                [array[i + 1], array[i]] = [array[i], array[i + 1]];
                swap = false;
            }
        }
    }
    return array;
};


unsorted = [4,5,1,21,2,9,10,15];


// 2. Implement selection sort. Your function should accept an array and return an array of sorted values.
const selectionSort = (array)=>{
    let index = 0;
    while (index < array.length) {
        for (let i = 0; i < array.length; i++) {
            if (array[index] < array[i]) { // ascending sort
                [array[index], array[i]] = [array[i], array[index]];
            }
        }
        index++;
    }
    return array;
};


// 3. Implement insertion sort. Your function should accept an array and return an array of sorted values.
const insertionSort = (array)=>{
  
    // iterate over the unsorted array
    for(let i = 1; i < array.length; i++){
        let j = i - 1, current = array[i];
        // iterate over the sorted portion, compare the current value to the values to it's left
        for(; j >= 0 && (array[j] > current); j--){
            // shift the sorted array numbers up by 1
            array[j+1] = array[j];
        }
        // insert the value into the sorted array
        array[j+1] = current;
    }
    return array;
};

// 4. Implement merge sort. Your function should accept an array and return an array of sorted values. You can solve this iteratively or recursively.
const mergeSort = (array)=>{
    if(array.length < 2) return array; // base case
    
    let middle = Math.floor(array.length/2);
    // divide
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));
    // conquer
    return merge(left, right);
};

const merge = (left, right)=>{
    let result = [], i = 0, j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // when right sub list is empty
    while(i < left.length){
        result.push(left[i]);
        i++;
    }
    // when left sub list is empty
    while(j < right.length){
        result.push(right[j]);
        j++;
    }
    return result;
};


// 5. Implement quick sort. Your function should accept an array and return an array of sorted values. You can solve this iteratively or recursively.
const partition = (array, start, end)=>{
    // assumes the pivot is always the last element
    let pivot = array[end], index = start;
    for(let i = start; i < end; i++){
        if(array[i] <= pivot){
            [array[index], array[i]] = [array[i], array[index]];
            index++;
        }
    }
    [array[index], array[end]] = [array[end], array[index]];
    return index;
};

const quickSort = (array, left = 0, right = array.length - 1)=>{
    if(left < right){
        let partitionIndex = partition(array, left, right);
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
};