## Intro to Big O Notation

Big O notation is a way of comparing the speed of two algorithms, ignoring speed of the system involved, amout of RAM, sixe of data set, etc.
Big O gives you an approximate upper bound on the runtime of your algorithm based on the size of the data set.

When comparing run times, constants and small components are ignored, e.g
 * O(55*n) -> O(n)
 * O(10*n^2 + 5n + 100) -> O(n^2)
 * O(n*log(n) + 3000n) -> O(n* log(n))
 
### Big O Runtimes - Time Complexity
#### O(1) - Constant Time
Rare - cases where the speed of the algorithm is not affected by the size of the data set.
No matter the size of the input, the time taken will not grow beyond some constant size.
If you were to plot out a graph of time v. data, you would see a horizontal line,
e,g if you were to add two numbers together, or have a loop that executes a set number of times, multiplying 
two numbers each iteration - it doesn't matter on the size of the numbers.

####O(n) - Linear Time
The runtime of the algorithm is roughly proportional to the size of the data set. Thus a data set that is 10x as large, should take roughly 10x as long,
e.g looping though an array of values, where the length of the array controls the number of iterations.
    
    const doubleThenTriple = (numbers)=>{
        let doubled = numbers.map((num)=>{
            return num * 2;
        });
        
        return doubled.map((num)=>{
            return num * 3
        });
    }

In the above example the data set is iterated over twice, O(2*n) or O(n+n).
However, since since constants are ignored, O(2*n) or O(n+n) is equivalent to O(n).
What matters is that the runtime scales in proportion to the input size, not the details of the proportional relationship.

####O(n^2) - Polynomial Time

    function allPairs(arr) {
        var pairs = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    
        return pairs;
    }

    function bubbleSort(arr) {
      var len = arr.length;
      var lastSwap;
      var temp
      while (len != 0) {
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
    
In the above example within each element of the array we are iterating over all elements again. Runtime is O(n*n) or O(n^2).
As a general rule of thumb, when you see nested loops, the runtime will be O(n^levels of nesting) - polynomial time, quadratic time when O(n^2)

Thus, a function with a single for loop will be O(n), a function with a loop inside of a loop will be O(n^2), 
a function with a loop inside of a loop inside of a loop will be O(n3), and so on
    
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
      
The example above would appear to be O(n^2) because of the inner loop, but it's not. It's actually O(n).
The runtime of the inner loop is not proportional to n! The inner loop will run a maximum of 10 times, so it is actually an O(1) operation. This means 
that the outer loop, which is O(n), performs an O(1) operation for each value of num1. Overall, it's O(n) * O(1) -> O(n).

### Space Complexity