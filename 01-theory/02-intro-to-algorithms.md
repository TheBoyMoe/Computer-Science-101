## Introduction to Algorithms

 * efficiency - being able to solve large data sets
 * scalability
 * classic data structures - binary search trees, hash tables, & classic algos for searching and sorting
 
 ### Course overview:
 
 * Algorithmic thinking - peak finding
 * Sorting and trees - event simulation
 * Hashing - genomic comparisons
 * Numerics - RSA encryption
 * Graphs - Rubics cube (min number of moves)
 * Shortest path - between two points
 * Dynamic programming - Image compression
 * Complexity theory
 
 ### Peak Finding
 
  * One Dimensional version
    - [2,4,1,3,5,3,5,6] - for the edge positions look either left/right, for other positions look both left and right to determine if your the peak. Applies locally.
    - Problem - find the peak, if it exists.
    - A simple solution, starting from the left and working your way along the array 
    - Generally look at n/2 elements, in the worst case you would have to look at all elements, O(n) complexity
    - Want to do better - divide and conquer algorithm
        - recursive step takes the n/2 position and look at the n/2 - 1 and then the n/2 + 1 position to see if it's greater - if not your done.
        - eventually you end up at the base case, an array of one element which is the peak.
        - results in a complexity of O(log n)
  
  * Two Dimensional version
     - You have a matrix or 2d array, n rows and m cols. Taking a position, a, that is NOT along any of the edges, a is a peak is it is greater than the position to the left, right, top and  bottom.
     - Use the Greedy Ascent algo, worst case scenario you would check every position O(n*m), where n===m, O(n^2)