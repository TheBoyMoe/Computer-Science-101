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

};
