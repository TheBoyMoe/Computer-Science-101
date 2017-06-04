## Stacks
 * a stack is a data structure employs LIFO, last item placed on the stack is the first removed.
 * stacks commonly only employ a few operations, pop to remove items from the top of the stack, push to add items to the top of the stack and either a size or length operation which returns the number of items in the stack.
 * stacks are widely used in programming, e.g
    * call stack - keeps track of functions currently being executed
    * backtracking - used by certain algorithms (in Binary Search Trees) to keep track of items in a certain order.
 
 * simple implementation
 
 
        function Stack() {
            this.stack = [];
        }
        
        Stack.prototype.push = function(val) {
            this.stack.push(val);
        }
        
        Stack.prototype.pop = function() {
            return this.stack.pop();
        }
        
        Stack.prototype.length = function() {
            return this.stack.length;
        }
        
    
 * using a stack backed by an array data structure would not be efficient since push operations in arrays are O(n) - although the implementation thus enforce LIFO.
 * a better implementation would use a doubly linked list, since pop and push operations are always O(1), or constant time. You could also use a singly linked list if you use the shift and unshift operations, which are also O(1). Depending on the implementation of the singly linked list, pop and push can be O(n) operations, linear time.    