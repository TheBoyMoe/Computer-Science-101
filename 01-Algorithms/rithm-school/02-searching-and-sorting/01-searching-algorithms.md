## Searching Algorithms

### Linear Search
 * simplest search algorithm to implement, you iterate through each and every element in an array or list until the element is found.
 * since you could potentially have to visit each and every element, time complexity is O(n) or linear time
 
### Binary/Bisection Search
 * example of a 'divide and conquer' algorithm, each iteration you divide the data you need to look through in half.
 * the list MUST be sorted before hand.
 * at each iteration you compare the element at the mid-point to the target. If they match you retiurn that elements index.
 * if not check if the mid-pont value is greater than or less than the target value, discarding the half of the data set the target can not be found in and then repeat the process of comparing the mid-point value and so on.
 * because each iteration you divide the data set in half, time complexity is O(log(n)) - which is significantly faster than O(n) for large data sets