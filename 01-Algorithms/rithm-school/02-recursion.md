## Recursion
Recursion is a function that calls itself. It's often used as an alternative to iteration as it's more elegant, resulting in fewer lines of code.
It's essential that all recursive functions have a base case that can be solved, terminating the recursive calls. 
Otherwise the function will call itself endlessly until there's a stack overflow - you get a RangeError - Maximum call stack size reached.

Recursive functions are most often used when you can take a problem, break it down into a simpler problem and pass that into the recursive function.
Then keep repeating the process until the base case is solved and the recursive call is terminated.

When creating a recursive function, you need to remember a couple of points:
 * have a base case that will terminate the function
 * how do we call the function from within itself, each time changing the input so we don't cause a stack overflow

A simple example:

    function sumRange(num){
       if(num === 1) return 1; 
       return num + sumRange(num-1);
    }
The first line is the base case. In the second line we call the function again, but modify the parameter in such a way that we eventually reach the base case and terminate the function.

If you call sumRange(4), for instance, then this function will itself call sumRange(3) on this line, 
which will add another copy of sumRange to the call stack. Similarly, sumRange will call sumRange(2), 
which will add yet another copy of sumRange to the stack. This process will continue until we reach the 
base case, after which these functions will start popping off of the stack. The call stack operates as a LIFO data structure.
The last function pushed on, is the first popped off. As each function is popped off, it returns a value to the previous function resulting in it returning and being popped off in turn until you finally reach the very first call in the stack , which returns with a value.

Examples of recursion:

    function power(base, exp) {
        if(exp === 0) return 1;
        return base * power(base, exp - 1);
    }
    
    2^4 = 2 * 2^3;
    2^3 = 2 * 2^2;
    2^2 = 2 * 2^1;
    2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!
    
    2*2*2*2*1 === 16 
    
    function factorial(num){
        if(num <= 1) return 1;
        return num * factorial(num -1);
    }
    
### Scope in Recursion
Often times in recursion we create wrapper or helper methods which are called multiple times by the outer function as a means of creating additional scope - called Helper Method Recursion.

In a purely iterative solution you could pass a callback to function, e.g all function returns true if every value of an array returns true when passed into the callback function
    
    function all(array, callback){
        for(var i = 0; i < array.length; i++){
            if(!(callback(array[i]))){
                return false;
            }
        }
        return true;
    }
    
    all([1,2,3,4], function(val){
        return val > 0;
    }); // true
    
    all(["1","2",3,"4"], function(val){
        return typeof val === 'string';
    }); // false
    
The same method could be tackled using a recursive solution:
    
    function allRecursive(array, condition) {
        var copy = array.slice();  
        function allRecursiveHelper(arr, cb){
            if (arr.length === 0) return true;
            if (condition(arr[0])){
                // each iteration of the array we reduce the size of the problem, 
                // until the base case is true and recursion stops
                arr.shift();
                return allRecursive(arr,condition); 
            } else {
                return false;
            }
        }
        return allRecursiveHelper(copy, condition);
    }
    
    var numbersArray = [1,2,3,4,5];
    allRecursive(numbersArray, function(v) {
        return v > 0;
    });
    
The same problem can also be solved with pure recursion, i.e no use of a helper function - this commonly implemented by passing in smaller and smaller parameters to each recursive call
 
    function allRecursive(array, condition) {
        var copy = copy || array.slice();
        if (copy.length === 0) return true;
        if (condition(copy[0])){
            copy.shift();
            return allRecursive(copy,condition);
        } else {
            return false;
        }
    }
    
    var numbersArray = [1,2,3,4,5];
    allRecursive(numbersArray, function(v) {
        return v > 0;
    }); 
 