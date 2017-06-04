# Graphs Exercise

For this exercise you must get the tests to pass.

#### Part I 

Given the following constructor function:

```js
function Graph(){
    this.vertices = [];
    this.adjacencyList = {};
}
```

Implement the following methods on the `Graph.prototype`

**addVertex** - this function should add a node to the graph and place a new key in the adjacency list with the value of an empty array.

**addEdge** - this function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.

**removeEdge** - this function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.

**removeVertex** - this function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.

**size** - this function should return the number of vertices

**numberOfEdges** - this function should return the number of edges the graph contains

#### Part II

Implement the following methods on the `Graph.prototype`

**depthFirstSearch** - this function should

**breadthFirstSearch** - this function should

#### Part III

Implement the following methods on the `Graph.prototype`

**djikstra** - this function should

**aStar** - this function should



