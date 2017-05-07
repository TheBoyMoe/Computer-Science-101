## Singly Linked Lists
 * since arrays are stored in memory contiguously, in general operations such as remove, insert and search are O(n).
 * for large data sets, or where your data set is going to be changing significantly, arrays may not be the best choice.
 * in these cases linked lists offer a better solution. Although access and search are O(n) operations, insertion and deletion are O(1) - constant time (for shift/unshift operations).
 * unlike arrays, linked lists are not stored contiguously. Each element, or node, stores the value (or reference when an object), but also stores a pointer to the memory location of the the next node in the list. The actual nodes of the linked list can thus be stored anywhere.
 * the first mode in the linked list is the 'head', by following it's pointer and each subsequent pointer you'll end up at the 'tail' or last node and  or end of the list.
 * shift/unshift operations are all O(1) - constant time, there is no need to shift elements up/down. Push operations are O(1) - no need to create an array copy when you run out of contiguous space as with arrays.
 * search, access operations are all O(n) - since the list is not contiguous and all we have is a reference to the head, or first element, finding a specific element means iterating through the list, until the required node is reached. That includes popping the last element - you have to through the whole list.
 * inserting/deleting nodes anywhere other than at the head, e.g shift/unshift, are O(n) operations for the same reason as search and access operations - this include pop and push
 

## Doubly Linked Lists

