# Big O Notation Exercises

### Part 1

Simplify the following big O expressions as much as possible:

1. `O(n + 10)`
2. `O(100 * n)`
3. `O(25)`
4. `O(n^2 + n^3)`
5. `O(n + n + n + n)`
6. `O(1000 * log(n) + n)`
7. `O(1000 * n * log(n) + n)`
8. `O(2^n + n^2)`
9. `O(5 + 3 + 1)`
10. `O(n + n^(1/2) + n^2 + n * log(n)^10)`

### Part 2

Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!


```js
// 1. loop which runs n times -> time O(n), space O(1)

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// 2. loop that runs at most 10 times -> time O(1), space O(1)

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// 3. loop that runs n times -> time O(n), space O(1)

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// 4. loop that runs n times -> time O(n), number of new elements n/2 -> space O(n)  

function onlyElementsAtEvenIndex2(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i] = array[i];
        }
    }
    return newArray;
}

// 5. nested loop, iterating through each n times -> time O(n^2), number of new elements n, inner loop O(1), outer loop O(n) -> space O(n)

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
```
