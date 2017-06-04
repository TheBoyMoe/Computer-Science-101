## Doubly Linked Lists
 * each node has a reference to the next as well as the previous node. This allows iteration in both directions.
 * the linked list typically has a reference to the head and the tail.
 ![Doubly linked list](doubly_linked_list.png)
 * push and pop operations are O(n), constant time, since there's no need to iterate over the whole list to reach the last node. The linked list has a reference to the tail.
 * link singly linked lists, accessing individual nodes is O(n). We either start from the head or tail and iterate over the list until the appropriate value is found.
 * we can thus cut the amount of traversing in half (start from the front for nodes in the front half, and vice versa). This means that we can write a more efficient algorithm, although the operation is still O(n) - reducing the runtime of a linear algorithm by a constant makes no difference to the actual runtime.
 