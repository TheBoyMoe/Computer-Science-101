/*
    References;
    
*/
'use strict';
function Node(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    // convert an array into a linked list
    if(Array.isArray(array) && array.length > 0){
        for(let i = 0; i < array.length; i++){
            this.push(array[i]);
        }
    }
}

// add a node to the end of the DoublyLinkedList. It should return the list - allows chaining of the method.
DoublyLinkedList.prototype.push = function (val) {
    let node = new Node(val);
    if(this.head === null){
        this.head = node;
        this.tail = this.head;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    
    this.length++;
    return this;
};

// should remove a node at the end of the DoublyLinkedList. It should return the node removed.
DoublyLinkedList.prototype.pop = function () {
    return this.remove(this.length - 1);
};

// add a node to the beginning of the SinglyLinkedList. It should return the SinglyLinkedList so the method can be chained
DoublyLinkedList.prototype.unshift = function (value) {
    if(this.head === null) return this.push(value);
    
    let node = new Node(value);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    
    return this;
};

//  remove a node at the beginning of the SinglyLinkedList. It should return the node removed.
DoublyLinkedList.prototype.shift = function () {
    return this.remove(0);
};

// update the value of a node at a given index of the SinglyLinkedList. It should return true if the node is updated successfully, or false if an invalid index is passed in.
DoublyLinkedList.prototype.set = function (index, value) {
    let current = this.__get(index);
    if(current !== null){
       current.val = value;
       return true;
    }
    return false;
};

// return the value at a specific index, otherwise return null
DoublyLinkedList.prototype.get = function (index) {
    let current = this.__get(index);
    if(current !== null){
        return current.val;
    }
    return null;
};

// internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return true/false depending on the operations success.
DoublyLinkedList.prototype.insert = function (index, value) {
    if(index < 0 || index > this.length) return false;
    
    let node = new Node(value);
    if(index === 0){
        if(this.head === null){
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        
        return true;
    }
    
    let prev = this.__get(index - 1);
    
    if (prev === null) {
        return false;
    }
    
    node.prev = prev;
    node.next = prev.next;
    if (this.tail === prev) {
        this.tail = node;
    }
    prev.next = node;
    this.length++;
    
    return true;
};

// remove a node at a specified index in a SinglyLinkedList. It should return the removed node value.
DoublyLinkedList.prototype.remove = function (index) {
    if(index < 0 || index >= this.length) return undefined; // out of range
    let temp;
    
    // remove the first
    if(index === 0) {
        temp = this.head;
        // list has only one node
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return temp.val;
        }
        // other wise
        this.head = this.head.next;
        if(this.head !== null){
            this.head.prev = null;
        }
        this.length--;
        
        return temp.val;
    }
    
    // remove the last
    if(index === this.length - 1){
        temp = this.tail;
        this.tail = this.tail.prev;
        if(this.tail !== null){
            this.tail.next = null;
        }
        this.length--;
        
        return temp.val;
    }
    
    // everything else
    let prev = this.__get(index - 1);
    temp = prev.next;
    prev.next = prev.next.next;
    if(prev.next !== null){
        prev.next.prev = prev;
    }
    this.length--;
    
    return temp.val;
};

// reverse all of the nodes in a DoublyLinkedList. It should return the reversed DoublyLinkedList.
DoublyLinkedList.prototype.reverse = function () {
    let current = this.head;
    let tail = this.tail;
    let temp;
    while(current){
        temp = current.next;
        current.next = current.prev;
        current.prev = temp;
        if(!temp){
            this.tail = this.head;
            this.head = current;
        }
        current = temp;
    }
    return this;
};


// HELPER METHODS

// internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.
DoublyLinkedList.prototype.__get = function (index) {
    if(index < 0 || index >= this.length) return null;
    
    let current, count;
    // execute the search from either direction, depending on the index
    if(index <= Math.floor(this.length/2)){
        // start from the front
        count = 0;
        for(current = this.head; current !== null && count !== index; current = current.next){
            count++;
        }
    } else {
        // otherwise start from the end
        count = this.length - 1;
        for(current = this.tail; current !== null && count !== index; current = current.prev){
            count--;
        }
    }
    return current;
};

DoublyLinkedList.prototype.toString = function () {
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

