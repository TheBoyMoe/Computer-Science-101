/*
    References:
    [1] http://stackoverflow.com/questions/2549320/looping-through-an-object-tree-recursively

 */

'use strict';

// PART 1

//1. Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all
const productOfArray = (array)=>{
    if(array.length === 0) return 1;
    let val = array.shift();
    return val * productOfArray(array);
};

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));
console.log(productOfArray([1,-2,3]));

// 2. Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

const contains = (obj, value)=>{
    let result = false;
    
    const recursiveHelper = (obj)=> {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (typeof obj[prop] === 'object') {
                    recursiveHelper(obj[prop]);
                } else {
                    if (obj[prop] === value) {
                        result = true;
                    }
                }
            }
        }
        return result;
    };
    return recursiveHelper(obj);
};


// 3. return all the strings in a nested object
const collectStrings = (obj)=>{
    let result = [];
    
    const recursiveHelper = (obj)=> {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (typeof obj[prop] === 'object') {
                    recursiveHelper(obj[prop]);
                } else {
                    if (typeof obj[prop] === 'string') {
                        result.push(obj[prop]);
                    }
                }
            }
        }
        return result;
    };
    return recursiveHelper(obj);
    
};

// 4. Linear Search - look at every element - find a value in an array, returning the index. Otherwise return -1.
const search = (array, value)=>{
    let result = -1;
    let i = 0;
    
    const recursiveHelper = (array)=>{
        if(array.length === 0) return;
        let num = array.shift();
        if(value === num) {
            result = i;
        }
        else {
            i++;
            return recursiveHelper(array);
        }
    };
    recursiveHelper(array);
    return result;
};

console.log(search([1,2,3,4,5],5)) // 4
console.log(search([1,2,3,4,5],15)) // -1


// 5. Binary (Bisection) search - this version returns the index of the element if a match is found, otherwise -1

const binarySearch = (array, value)=>{
    const helper = (array, value, left, right)=>{
        if(left > right) return -1;
        let middleIndex = Math.floor((left + right)/2);
        if(array[middleIndex] === value) return middleIndex;
        
        if(array[middleIndex] > value)
            return helper(array, value, left, middleIndex - 1);
        else
            return helper(array, value, middleIndex + 1, right);
    };
    return helper(array, value, 0, array.length);
};

console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],15)) // -1
console.log(binarySearch([1,2,3,4,5],6)) //-1
console.log(binarySearch([1,2,3,4,5],11)) // -1

// 6.  takes in an object and finds all of the values which are numbers and converts them to strings.

const stringifyNumbersOld = (obj)=>{
    const helper = (obj)=>{
        for(let prop in obj){
            if(obj.hasOwnProperty(prop)){
                if(typeof obj[prop] === 'number') {
                    obj[prop] = '' + obj[prop];
                }
                else {
                    if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop]))
                        return helper(obj[prop]);
                }
            }
        }
    };
    helper(obj);
    return obj;
};

// does not change the original object ?? WHY BOTHER
const stringifyNumbers = (obj)=>{
    let newObj = {};
    
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            if(typeof obj[prop] === 'number') {
                newObj[prop] = '' + obj[prop];
            }
            else if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
                newObj[prop] = stringifyNumbers(obj[prop]);
            } else {
                newObj[prop] = obj[prop];
            }
        }
    }
    return newObj;
};

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

console.log(stringifyNumbersOld(obj));

/* PART 2 - re-implement document methods using recursion - check traverse-dom-elements.js

   References:
   [1] http://stackoverflow.com/questions/33264842/implementing-getelementsbyclassname-recursively
   [2] https://gist.github.com/armandocanals/9e3cebc015e93075e87c (recursive way to find elements by class name)
   
*/

/*
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <div class="row main sidepane">
            <h1>
                <p class="row foo"></p>
                <div class="row main sidepane">
                    <h2>
                        <div class="row test">1</div>
                    </h2>
                </div>
            </h1>
        </div>
        <div class="row">
            <div class="main">
                <h2 class="row">
                    <div id="foo" class="row main sidepane">2</div>
                </h2>
            </div>
        </div>
        <div class="row"></div>
    </body>
</html>
*/


