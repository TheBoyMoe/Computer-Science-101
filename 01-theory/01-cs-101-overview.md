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
    * order of growth (Big 'O' Notation) 
      * evaluate algo efficiency when size of input is very large
      * express a program's run time as input increases
      * put an upper bound on growth
      * look at the sections of the program which take the longest to run
      