/* Linked List implementation

    Reference:
    [1] https://github.com/loiane/javascript-datastructures-algorithms/blob/second-edition/chapter05/01-LinkedList.js
    

*/
"use strict";

function Node(val){
    this.val = val;
    this.next = null; // pointer to the next node in the list
}

function SinglyLinkedList(array = []) {
    this.head = null; // reference to the first node
    this.tail = null;
    this.length = 0;
    
    // convert an array into a linked list
    if(Array.isArray(array) && array.length > 0){
        for(let i = 0; i < array.length; i++){
            this.push(array[i]);
        }
    }
}

//  add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList so the method can be chained
SinglyLinkedList.prototype.push = function(val) {
    let node = new Node(val);
    
    if(this.head === null){
        this.head = node;
        this.tail = this.head;
    } else {
        this.tail.next = node; // ensures the method can be chained - must come before the next line to pass ? why
        this.tail = node;
    }
    // increment the list size
    this.length++;
    
    return this; // ensures the method can be chained
};


// remove a node at the end of the SinglyLinkedList. It should return the node removed.
SinglyLinkedList.prototype.pop = function() {
    return this.remove(this.length - 1);
};


//  remove a node at the beginning of the SinglyLinkedList. It should return the node removed.
SinglyLinkedList.prototype.shift = function () {
   return this.remove(0);
};


// add a node to the beginning of the SinglyLinkedList. It should return the SinglyLinkedList so the method can be chained
SinglyLinkedList.prototype.unshift = function(val) {
    // add to the head - return the new length
    let node = new Node(val);
    if(this.head === null){
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.length++;
    
    return this;
};


// update the value of a node at a given index of the SinglyLinkedList. It should return true if the node is updated successfully, or false if an invalid index is passed in.
SinglyLinkedList.prototype.set = function(index, value) {
    let node = this.__get(index);
    if(node !== null){
        node.val = value;
        return true;
    }
    return false;
};

// return the value at a specific index, otherwise return null
SinglyLinkedList.prototype.get = function(index) {
    let node = this.__get(index);
    if(node !== null) return node.val;
    return null;
};


// remove a node at a specified index in a SinglyLinkedList. It should return the removed node value.
SinglyLinkedList.prototype.remove = function(index) {
    if(index < 0 || index >= this.length) return undefined;
    
    let temp;
    if(index === 0){
        temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp.val; // returning value of that node
    }
    
    let prev = this.__get(index - 1);
    temp = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return temp.val;
};


// internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return true/false depending on the operations success.
SinglyLinkedList.prototype.insert = function(index, val){
    if(index < 0 || index > this.length) return false;
    
    let temp, node = new Node(val);
    if(index === 0){
        if(this.head !== null){
            temp = this.head;
        }
        this.head = node;
        this.head.next = temp;
        this.length++;
        return true;
    }
    
    let prev = this.__get(index - 1);
    if(prev === null) return false;
    
    temp = prev.next;
    prev.next = node;
    prev.next.next = temp;
    this.length++;
    
    return true;
};


// reverse all of the nodes in a SinglyLinkedList. It should return the reversed SinglyLinkedList.
SinglyLinkedList.prototype.reverse = function () {
    let next, prev = null, current = this.head;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    this.head = prev;
};


// HELPER METHODS

// internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.
SinglyLinkedList.prototype.__get = function(index) {
    if(index >= this.length || index < 0) return null;
    
    let current, count = 0;
    // starting at the head, iterate through the list till count == index, return that node
    for(current = this.head; current !== null && count !== index; current = current.next){
        count++;
    }
    return current;
};


SinglyLinkedList.prototype.toString = function() {
    if (this.head === null) return '[]';
    
    let str = '[';
    for (let current = this.head; current !== null; current = current.next) {
        if (current.val === null) {
            str += 'null';
        } else if (current.val === undefined) {
            str += 'undefined';
        } else {
            str += current.val.toString();
        }
        
        if (current.next !== null) {
            str += ',';
        }
    }
    str += ']';
    
    return str;
};
