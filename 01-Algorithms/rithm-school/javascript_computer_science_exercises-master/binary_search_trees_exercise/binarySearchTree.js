/* Binary Search Tree Implementation */
'use strict';

function Node(value) {
    this.value = value;
    this.left = null;
    this.right  = null;
}

function BinarySearchTree(comparator = null) {
    this.root = null;
    this.comparator = comparator;
    this.compare = function (left, right) {
        if(this.comparator !== null)
            return this.comparator(left, right);
        
        return (left < right)? -1: (right < left)? 1: 0;
    }
}

BinarySearchTree.prototype.insertIteratively = function (value) {
    let node = new Node(value);
    if(this.root === null) {
        this.root = node;
        return this;
    }
    else {
        let current = this.root;
        while(true) {
            if (value < current.value) {
                if(current.left === null){
                    current.left = node;
                    return this;
                } else {
                    current = current.left;
                }
            } else if(value > current.value){
                if(current.right === null){
                    current.right = node;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }
};

BinarySearchTree.prototype.insertRecursively = function (value) {
    if(this.root = null){
        this.root = new Node(value);
        return this;
    }
    return this.__insert(value);
};


// return the node if found, otherwise return undefined
BinarySearchTree.prototype.findIteratively = function (value) {
    let current = this.root, found = false;
    if(current.value === value) return current;
    while(current && !found){
        if(value < current.value){
            current = current.left;
        } else if(value > current.value){
            current = current.right;
        } else {
            found = true;
        }
    }
    if(!found) return undefined;
    
    return current;
};

BinarySearchTree.prototype.findRecursively = function (value) {
    return this.__find(value);
};



// HELPER FUNCTIONS
BinarySearchTree.prototype.__insert = function (value, node = this.root) {
    if(node === null) return this;
    
    if(this.compare(value, node.value) <= 0){
        if(node.left === null){
            node.left = new Node(value);
            return this;
        }
        return this.__insert(value, node.left);
    }
    if(node.right === null){
        node.right = new Node(value);
        return this;
    }
    return this.__insert(value, node.right);
};

BinarySearchTree.prototype.__find = function (value, node = this.root, parent = null) {
    if(!node) return undefined;
    
    if(this.compare(value, node.value) === 0) return node;
    
    if(this.compare(value, node.value) < 0)
        return this.__find(value, node.left, node);
    
    return this.__find(value, node.right, node);
};

// ?? problems dealing with tree more than 3 levels deep
BinarySearchTree.prototype.toString = function (node=this.root, indentation=0) {
    if (!node) return ' ';
    
    let valueStr;
    if (node.value === null) {
        valueStr = "null";
    } else if (node.value === undefined) {
        valueStr = "undefined";
    } else {
        valueStr = node.value.toString();
    }
    
    let str = new Array(indentation + 1).join("  ") + valueStr + "\n";
    str += this.toString(node.right, indentation + 1);
    str += this.toString(node.left, indentation + 1);
    
    return str;
};

