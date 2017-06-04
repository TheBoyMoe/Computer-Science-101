## Queues
 * are a FIFO data structure, the first element added or enqueued is the first to be returned or dequeued.
 * a simple implementation of a queue would use an array. The push operation would enqueue values onto the end of the queue, shift would then be used to dequeue values from the front of the queue.
 
 
     function Queue() {
         this.queue = [];
     }
     
     Queue.prototype.enqueue = function(val) {
         this.queue.push(val);
     }
     
     Stack.prototype.dequeue = function() {
         return this.queue.shift();
     }
     
     Stack.prototype.length = function() {
         return this.queue.length;
     }
     
 * although the implementation enforces FIFO feature of a queue, both enqueue and dequeue or O(n) operations - shift requires shifting all the elements by one, push requires an array copy when the array runs out of space.   
 * queues are often used in job scheduling and prioritization, e.g managing the order in which background jobs are processed, or managing all the requests received by a service - using a first in first serve policy, or scheduling tasks in a multitasking CPU. Certain search algorithms, e.g Binary Search Tree use queues to keep track of results, where the order is important.    