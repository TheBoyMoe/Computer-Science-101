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
 * start with the second element in the array and compare it with the element to it's left and swap if necessary.
 * you then move on to the next element and compare it to the elements that preceed it - the now sorted portion and insert it into it's correct position in the sorted portion. This is expensive as the sorted portion of the array grows since it requires shifting the elements that follow the inserted element by one.
 * then repeat the process comparing the next element to the elements to the right - the sorted portion and inserting it if necessary until the end is reached.
 * like bubble sort the time complexity is O(n^2) since you're examining each element sorting sub-arrays, best case scenario is O(n) if there only one complete iteration necessary

### Selection Sort
 * assume that the first element in the array is the minimum, iterate through the array comparing each value in turn until you find a value which is smaller and then swap the two. Continue until the end of the array with the comparison. 
 * the left most value in the array, index 0, is now the smallest in the list
 * repeat this process with the next element, find the smallest element amongst the remaining elements and swap it for the element at index 1.
 * keep repeating with each element in turn.
 * in the best case scenario the tim complexity is O(n^2) since your repeating nested loops.
 
 
Bubble, insertion and selection sorts are simple, but inefficient sorting algorithms with a typical time complexity of O(n^2). Practical sorting algorithms used are almost always those that have an average time complexity of O(n log n) - the most common are heap, merge and quick sort.

### Merge Sort
 ![Merge Sort](/home/theboymo/WORK/WEBDEV/COMPUTER-SCIENCE-101/01-Algorithms/rithm-school/02-searching-and-sorting/imgs/Merge_sort_algorithm_diagram.png)
 
  * split up the array until you can compare one value with another - giving you sorted pairs.
  * take pairs of sorted pairs and sort them to end up with a sorted sub-arrays of four elements each.
  * keep sorting and merging sub-arrays until you have one sorted array.
  * once the array has been broken down into one-element sub-arrays, it takes O(n) comparisons to get two-element sorted sub-arrays. It then takes O(n) comparisons to get four-element sorted sub-arrays, and so on.
  * in total it takes O(log n) sets (the logarithm measures how many times you can divide a number by 2 until you get a number that is 1 or less) of O(n) comparisons.
  * overall the time complexity is O(n log(n)) - whether it's a best case or worst case scenario - which is much better than bubble, insertion or selection sort.
  * it means that merge sort scales very well for large data sets.
  * when implementing merge sort, write a function that takes two sorted arrays and merges them. Merge sort will then split these in half, recursively calling itself on each half, before merging the two sorted halves back together.
  
  