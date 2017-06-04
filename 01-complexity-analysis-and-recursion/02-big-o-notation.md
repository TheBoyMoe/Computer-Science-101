## Intro to Big O Notation

Big O notation is a way of comparing the speed of two algorithms - refered to as Time Complexity, ignoring speed of the system involved, amount of RAM required and the size of data set. Big O gives you an approximate upper bound on the runtime of your algorithm.

When comparing run times, constants and small components are ignored, e.g
 * O(55*n) -> O(n)
 * O(10*n^2 + 5n + 100) -> O(n^2)
 * O(n*log(n) + 3000n) -> O(n* log(n))
 
 
### Big O Runtimes - Time Complexity

![Time Complexity](time-complexity.png)


#### O(1) - Constant Time

Rare - cases where the speed of the algorithm is not affected by the size of the data set. No matter the size of the input, the time taken will not grow beyond some constant size. If you were to plot out a graph of time v. data, you would see a horizontal line, e,g if you were to add two numbers together, or have a loop that executes a set number of times, multiplying two numbers each iteration - it doesn't matter on the size of the numbers.


#### O(log n) - Logarithmic time

Algorithms that demonstrate logarithmic time generally divide the input by a fixed fraction each iteration, e.g binary search and binary tree the data set is divided by two each iteration. Such algorithms are considered highly efficient. Complexity grows as a log of the size of the input.


````javascript
    // Function to recursively print the right half of a string
    var right = function(str){
        var length = str.length;
        
        // Helper function
        var help = function(index){
            
            // Recursive Case: Print right half
            if(index < length){
              
                // Prints characters from index until the end of the array
                console.log(str.substring(index, length));
                
                // Recursive Call: call help on right half
                help(Math.ceil((length + index)/2));
            }
            
            // Base Case: Do Nothing
        };
        help(0);
    }
````


#### O(n) - Linear Time

The runtime of the algorithm is roughly proportional to the size of the data set. Thus a data set that is 10x as large, should take roughly 10x as long, e.g looping though an array of values, where the length of the array controls the number of iterations.
    
```javascript
    const doubleThenTriple = (numbers)=>{
        let doubled = numbers.map((num)=>{
            return num * 2;
        });
        
        return doubled.map((num)=>{
            return num * 3
        });
    }
```
 
In the above example the data set is iterated over twice, O(2*n) or O(n+n). However, since since constants are ignored, O(2*n) or O(n+n) is equivalent to O(n). What matters is that the runtime scales in proportion to the input size, not the details of the proportional relationship.


#### O(n log n) - Log Linear Time

Many sorting algorithms exhibit log linear time complexity - iterating over the data set O(n) * comparing items O(log n), thus O(n) * O(log n) or O(n log n). Heap, merge and quick sort all demonstrate O(n log n) time complexity. 


#### O(n^2) - Polynomial Time

```javascript
    function allPairs(arr) {
        var pairs = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                pairs.push([arr[i], arr[j]]);
            }
        }
        return pairs;
    }
```

```javascript
    function bubbleSort(arr) {
        var len = arr.length;
        var lastSwap;
        var temp;
        while (len !== 0) {
            lastSwap = 0;
            for (var i = 1; i < len; i++) {
                if (arr[i - 1] > arr[i]) {
                     // Swap the two elements
                     temp = arr[i-1];
                     arr[i-1] = arr[i];
                     arr[i] = temp;
                     lastSwap = i;
                }
            }
            len = lastSwap;
        }
    }
```      
    
    
In the above example for each element of the array we are iterating over all elements again. Runtime is O(n*n) or O(n^2). As a general rule of thumb, when you see nested loops, the runtime will be O(n^levels of nesting) - polynomial time, quadratic time when O(n^2). Thus, a function with a single for loop will be O(n), a function with a loop inside of a loop will be O(n^2), a function with a loop nested three deep will be O(n^3), and so on. 
    
    function logMultiples(n) {
        for (var num1 = 1; num1 <= n; num1++) {
            for (var num2 = 1; num2 <= n; num2++) {
                console.log(num1 * num2);
            }
        }
    }

Example of O(n^2), when n is 1, the function logs 1 multiple; when n is 2, the function logs 4 multiples; when n is 3, the function logs 9 multiples, and so on.

    function logSomeMultiples(n) {
        for (var num1 = 1; num1 < n=; num1++) {
            for (var num2 = 1; num2 <= Math.min(n, 10); num2++) {
                console.log(num1 * num2);
            }
        }
    }
      
The example above would appear to be O(n^2) because of the inner loop, but it's not. It's actually O(n). The runtime of the inner loop is not proportional to n! The inner loop will run a maximum of 10 times, so it is actually an O(1) operation. This means that the outer loop, which is O(n), performs an O(1) operation for each value of num1. Overall, it's O(n) * O(1) -> O(n).


#### O(2^n) - Exponential Time

Such algorithms are some of the worst performers. A typical example is the knapsack problem. You're given a set of items, each with a weight and a knapsack that can hold a certain weight. The challenge is to figure out the combination of items that will fir into the knapsack without exceeding it's weight limit. The only known algorithm to solve the problem involves examining every possible combination of items. Since an item may be inside or out, each item has 2 possibilities, for n Items, or O(2^n).


#### O(n!) - Factorial Time

Such algorithms grow faster than any other, including exponential. Typical example is determining the route a travelling salesman should take to visit every city once and return to the starting point.



### Space Complexity

Big O doesn't just deal with the amount of time that different algorithms take or time complexity. It's also used to talk about the amount of space, or memory, that the program requires, or Space Complexity. We're often concerned with the Auxiliary Space Complexity - how much additional memory is required beyond what is allocated for the inputs themselves

    function total(array) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total;
    }

The function total takes an array of length n and it's time complexity is O(n) - we're looping through it once and adding the total. The space complexity is O(1) - we only require one additional unit of space for the number stored in total.

    function double(array) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.push(2 * array[i]);
        }
        return newArray;
    }
 
The function total takes an array of length n, doubles each value in turn before adding those values to a new array and returning it. Both the time and space complexity are O(n). In this case we need n additional units of space, one for each value in the original array for each new value created before adding it to the new array.

[Big-O Cheat Sheet](http://bigocheatsheet.com/)

[Intro to Algorithms](http://faculty.simpson.edu/lydia.sinapova/www/cmsc250/LN250_Weiss/Contents.htm)

[More Intro to Algoritms](http://faculty.simpson.edu/lydia.sinapova/www/cmsc250/LN250_Levitin/Contents.htm) 
