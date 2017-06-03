### Binary Heap

Data structure similar to a BST which uses either a tree or an array data structure. Binary heaps are a common way of implementing a priority queue, and is the data structure used for the heap sort algorithm. It is implemented in one of two ways:
 * max heap - higher nodes 'bubble' up to the root, or
 * min heap - lower nodes 'bubble' up to the root.
 
Each node can only have two children, like a BST. However, when adding a node, you start at the root and add nodes going from top to bottom and left to right.

With a max heap, add the node to the bottom of the heap, going from left  ot right in the first available spot. you then compare the node's value with that of it's parent. If it's more, swap the two nodes. Then compare the value of the swapped node with it's parent's value and swap the two if the child's value is greater.  This is repeated until the child's value is smaller. This process can be executed either iteratively or recursively. In this manner the node 'bubbles' up the heap so that the largest values are at the top. 

The number of operations required depends only on the number of levels the new element must rise to satisfy the heap property, thus the insertion operation has a worst-case time complexity of O(log n) but an average-case complexity of O(1)

In a min heap you swap the child with the parent if the child is smaller - in this manner the largest values 'bubble' down.

While any node in a heap can be removed, it's common to remove the root node. The largest value in a max-heap, or the lowest value in a min-heap. Removing the root node involves a first replacing the root node with the last node in the heap, at the bottom and the last node going from left to right. If the new node is greater than it's children, leave it there. If it's less than it's children, pick the greater of the two children and swap the two nodes. Keep repeating this process until the node is greater than it's children. In a min heap, swap the node with one of it's children if it's greater


A binary heap can also be implemented as an array, examples being heapsort and priority queues. Pointers are not used as is the case with a BST, instead the parent and child of each node are found using the formula:

 * for a parent at index n:
    * the left child will be at index 2n+1
    * the right child will be at index 2n+2
 
 * for a child at index n:
    * it's parent will be at index Math.floor((n-1)/2)


![Min Heap](binary-heap-array.jpg)    
![Min Heap](binary-tree-array.png)    


#### Performance Heapsort

Space complexity    - O(1) 
Insert              - O(n log n)
Delete              - O(n log n)
Search              - O(n) 



#### References

[Binary Heap](https://en.wikipedia.org/wiki/Binary_heap)
[Remove an item from a heap](https://www.youtube.com/watch?v=ijfPvX2qYOQ)
[Implementing a heap as an array](https://www.youtube.com/watch?v=fJORlbOGm9Y)
[Heapsort](https://en.wikipedia.org/wiki/Heapsort)