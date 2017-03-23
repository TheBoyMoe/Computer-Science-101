# Computer Science 101

## Overview

 * Declarative knowledge - statement of fact
 * Imperative knowledge 
    - is a 'how to'
    - a recipe - a sequence of steps which specifies when each step should be executed (flow control)
               - a means of determining when to stop.
    - each step is built from a set of predefined primitive instructions
        - arithmetic (+,-.*,/, %) & logic operations
        - simple tests (is a == b, etc)
        - storing/moving data
 * Turing showed that you could compute anything using the [Turing Machine](https://www.youtube.com/watch?v=gJQTFhkhwPA&feature=youtu.be) and [6 basic operations(primitives)](http://stackoverflow.com/questions/28148562/what-are-the-six-basic-primitives-in-turing-complete)
        - move left, right, print(write to cell), scan(read cell contents), erase and halt(do nothing).
 * A programming language provides a set of primitives (strings, booleans, numbers, etc) & operations (+,/, *, etc), which are used to build expressions
        
        
## Branching/Flow Control

 * if/if else blocks
    - execution of block occurs if the condition evaluates as true
    - uses comparison operators(>, <, >=, <=, ==, !=) and logic operators (true/false)
 * for/while/do while loop
    - execution of block occurs if the condition evaluates as true
    - continues until the condition evaluates as false
    - use 'break' statement to terminate loop early when a particular condition occurs, or use 'continue' to skip the current iteration.
     
## Basic Searching

Guess a number between 0 and 100
 * Guess and check - you would use a loop and starting at 0, increment by one each iteration until you reach the value
 * Bisection search (convergence) - first guess would be 50, ask if the number is greater/less than 50, and eliminate half the values. Keep repeating until the correct value is reached.
    - taking the search space as being N, we're halving it N/2 with each guess. To reach the value you need log2N steps (or guesses).
    - guessing a number between 0 to 100, log2+100 = ~6.
    
##  Abstraction and Decomposition

 * Abstraction - hide complexity/details, don't need to or want to see the detail - you don't need to know how something works to use it.
 * Decomposition - break code up into to smaller, more manageable chunks or modules. Are self contained, helps to organise code and can be reused elsewhere.
 * You can achieve abstraction and decomposition through the use of functions. You can also achieve decomposition through Classes.
 
## Recursion
 
 * Algorithimically - the process of reducing a problem to a smaller/simpler version of itself that is easier to solve (divide-and-conquer) - use the solution of the smaller problem to solve the larger problem.
 * Programatically it is the process of a function calling itself. You require one or more base cases that can be solved to prevent an infinite loop.
 * Points to remember when calling a recursive function:
      - each recursive call creates it's own scope in the execution stack
      - once the base case is reached, a value is returned to the function that called it, which in turn solves that function call and so on up the call stack to finally returning the result.
      
## Algorithms and Program Efficiency

 * Even though computers are speeding up, data sets are growing larger and larger - efficient algorithims are thus still important.
 * Ways of determining program efficiency (we want to evaluate just the algo, we don't want it affected by the implementation or the pc its run on)
    * time the operation different algos to solve the problem, e.g recursion v iterative technique. Affected by the implementation of the algo, spec of the pc, size of input.
    * count operations the number of operations as a size of the input. Assume operations such as math operations, comparisons, assignments, accessing objects from ram - count the number of operations as a function of the size of the input - give you an idea of the efficiency of the algo.
      * count number of operations per item of data & multiply up.
      * still depends on implementation, though independent of the pc run on
      * need to consider if doubling size of input, will it double number of operations, quadruple, etc.
    * order of growth (Big 'O' Notation - a way of measuring complexity) 
      * evaluate algo efficiency when size of input is very large
      * express a program's run time as input increases
      * put an upper bound on growth, as tight as possible
      * look at the sections of the program which take the longest to run, e.g the loop that takes 5 operations for each value, and not returning the value at the end. Focus on the term that grows most rapidly.
      * Big 'O' measures the growth in the upper bound - evaluates the algo and not the implementation or pc
        * express rate of growth relative to the input size
 
 * Types of order of growth(complexity grows gowing down the list): constant(number of operations constant no matter the size of input), linear, quadratic, logarithmic(slows down as input grows), exponential (worst!)
      * O(1) -> constant run time - rare (will run in the same amount of time, independent of the size of input)
      * O(log n) -> logarithmic run time - complexity grows as log of size of one of it's inputs, e.g bisection search and binary search of a list
      * O(n) -> grows linearly - going from 10 to 100, is the same as going from 100 to 1000 operations - growth is constant
      * O(n log n) -> log linear run time
      * O(n^c) -> polynomial run time - c is a constant
      * O(c^n) -> exponential run time -c is a constant raised to a power based on the size of n (worst of the lot)
 
 * When designing algorithms, your goal is to be as high up in this listing as possible:
     * Looping through an unsorted list looking for a particular element - grows linearly, O(n), where n is length.
     * Looping through a sorted list - order of growth is linear, although average time to find item is less since you can stop looking as soon as you find an item large than the target, still O(n).
     * NOTE: you can have loops and recursive calls whose order of growth is constant, O(1) - ONLY if number of iterations is independent of size of input. 
     * Nested loops - O(len1 * len2), ie product where loops are of different lengths, worst case scenario loops are of the same length, O(n^2) - (n squared). Nested loops typically demonstrate quadratic behavior.

### Logarithmic Complexity - Bisection Search

 * Both unsorted/sorted searches require walking down the list checking each item in turn, complexity is linear. Each iteration your reducing the problem by n - 1.
 * Bisection search - starting with a SORTED list, pick an item that divides the list in half, check for the target. If not, check if the value is greater or smaller than the target - eliminate half of the items each iteration, reducing the problem size by n/2 each iteration.
 * Example of a 'divide and conquer' algorithm, complexity is O(log n) where n is list length.
 * Worst case you get down to a list of one element
 * Note: algo that reduces the problem by n - 1 each time -> linear. algo the reduces the problem by half each time(n/2 or n/3 or n/4, etc) is logarithmic(generally, unless there's a hidden cost somewhere) - log linear.
 
 
### Polynomial Complexity

 * Most commonly seen in nested loops and recursive function calls.
 * Most common polynomial algorithims are quadratic - complexity grows with the square of the size of input O(n^2)
 
 