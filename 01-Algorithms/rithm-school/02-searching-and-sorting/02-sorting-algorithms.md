## Sorting Algorithms

### Bubble Sort
 * compare each element in the array with the next, the one to the right, if it's greater then swap them.
 * continue this process until the end of the array is reached. At which point the rightmost element will be in the correct spot, it is the largest element in the set.
 * start from the beginning of the array and repeat the process.
 * since the rightmost element from the last iteration is now sorted, this process will terminate earlier and earlier each time you repeat.
 * you continue until you've run through an iteration where no swaps are made.
 * in best case scenario, e.g. you only need to iterate through the array once, the time complexity would be O(n).
 * it's typically O(n^2) - quadratic order of growth, since your iterating through nested loops - each array your running through a sub-array of the original.

### Insertion Sort
 * similar to bubble sort, except you start with the second element in the array and compare it with the element to it's left and swap if necessary.
 * you then move on to the next element and compare it to the sorted portion and insert it into it's correct position in the sorted portion, which is expensive since it requires shifting the elements that follow by one.
 * then repeat the process comparing the next element to the right of the sorted portion to sorted portion and inserting it if necessary until the end is reached.
 * like bubble sort the time complexity is O(n^2) since you're examining each element sorting sub-arrays, best case scenario is O(n) if there only one complete iteration necessary

### Selection Sort
 * assume that the first element in the array is the minimum, iterate through the array comparing each value in turn until you find a value which is smaller and then swap the two. Continue until the end of the array with the comparison. 
 * the left most value in the array, index 0, is now the smallest in the list
 * repeat this process with the next element, find the smallest element amongst the remaining elements and swap it for the element at index 1.
 * keep repeating with each element in turn.
 * in the best case scenario the tim complexity is O(n^2) since your repeating nested loops.
 
 
Bubble, insertion and selection sorts are simple, but inefficient sorting algorithms with a typical time complexity of O(n^2). Practical sorting algorithms used are almost always those that have an average time complexity of O(n log n) - the most common are heap, merge and quick sort.


 