## Selection Sort

 * Find the smallest item, swap for the 1st item  in the array.
 * Find the next smallest item, swap it for the 2nd item in the array.
 * Find the next smallest, swap for the 3rd, and so ,on.

### Find the minimum element in a subarray

 * Once you've found the smallest value in an array, and swapped it for the value at index 0, instead of looking for  the second smallest value, start the search at index 1, e.g a subarray.
 * You would then look for the smallest value from index 1, to the end of the array, and swap it for the value at index 1.
 * Repeat the next iteration form index 2, and so on. Each time looking for the smallest value in a smaller subarray of the original.

### Asymptotic running time analysis

  * The swap function has 3 lines of code - each call to swap thus takes constant time for n iterations - O(n).
  * selectionSort function involves incrementing a counter and performing a swap, takes constant time for n iterations - O(n).
  * indexOfMinimum is a loop, the number of iterations performed depending on the size of the subarray.
  * On the first iteration the subarray is the whole array starting at index 0. 2nd iteration starts at index 1, n-1 iterations. 3rd iteration starts at index 2, n-2 iterations, and so on. The total time for all the calls n^2/2 * n/2 - O(n^2).
  * Overall we have O(n^2) calls for indexOfMinimum, and O(n) calls for swap and selectionSort functions.
  * O(n^2) is the most significant, selectionSort has order of growth of O(n^2).
