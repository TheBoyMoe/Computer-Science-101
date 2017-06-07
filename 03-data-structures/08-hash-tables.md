### Hash Tables/Maps

Are data structures that map keys to values. They have an average run time of O(1) for searching, insertion and deletion operations, and a space complexity of O(n). Maps are akin to js objects, except the keys can be of any data type, including functions, objects and any primitive. When inserting/accessing a value, the key is 'hashed' converting it into an index, which is used used to look up or store the corresponding value. On occasion the hashing function can generate the same index, causing a collision.

In js objects are often thought of as maps. However, in js the keys must be strings or symbols. With a Map you can determine it's size with the size property, while the size of an object must be determined manually. ES2015 introduced the Map and WeakMap data types. Both are implementations of Hash Tables, but objects must be used as the keys in Weak Maps.

With creating your own data structure, you have to create a hashing function that will generate the indices/keys that are unique, thus avoiding collisions, although this can still occur. The hashing function you create should provide a uniform distribution of indexes, reducing likelihood of duplicates. If duplicates occur, the function needs a way to resolve such collisions.

Hash tables hve remarkable performance characteristics, insert/delete and search operations are all O(1), Constant time, operations. Space complexity is O(n) - same as many other data structures.