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