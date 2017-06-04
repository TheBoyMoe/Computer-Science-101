"use strict";
//1. linear search using iteration
const linearSearch = (array, value)=>{
    let index = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] === value) {
            index = i;
            break;
        }
    }
    
    return index;
};

// 2. linear search using recursion
const linearSearchRecursive = (array, value)=>{
    let index = -1;
    let i = 0;
    const helper = (array)=>{
        if(array.length === 0) return;
        let num = array.shift();
        if(num === value){
            index = i;
        } else {
            i++;
            return helper(array);
        }
    };
    helper(array);
    
    return index;
};


// 3. binary search
const binarySearch = (array, value)=>{
    
    let start = 0, end = array.length - 1, middleIndex;
    while(start <= end){
        if(start === end)
            middleIndex = start;
        else
            middleIndex = Math.floor((start + end)/2);
        
        if(array[middleIndex] === value)
            return middleIndex;
        if(array[middleIndex] > value)
            end = middleIndex - 1;
        else
            start = middleIndex + 1;
    }
    return -1
};


// 4 binary search using recursion
const binarySearchRecursive = (array, value)=>{
    const helper = (array, value, left, right)=>{
        if(left > right) return -1;
        let middleIndex = Math.floor((left + right)/2);
        if(array[middleIndex] === value) return middleIndex;
        
        else if(array[middleIndex] > value)
            return helper(array, value, left, middleIndex - 1);
        else
            return helper(array, value, middleIndex + 1, right);
    };
    return helper(array, value, 0, array.length);
};

console.log(binarySearchRecursive([1,2,3,4,5],5)) // 4
console.log(binarySearchRecursive([1,2,3,4,5],15)) // -1
console.log(binarySearchRecursive([1,2,3,4,5],6)) //-1
console.log(binarySearchRecursive([1,2,3,4,5],11)) // -1