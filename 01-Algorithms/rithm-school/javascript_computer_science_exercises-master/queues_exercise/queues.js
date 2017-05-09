/* Queue implemented using a Singly Linked List */

function Node(value) {
    this.value = value;
    this.next = null;
}

function Queue() {
    this.first = null;
    this.last = null;
    this.size = 0;
}

// add to the end
Queue.prototype.enqueue = function (value) {
    let node = new Node(value);
    if(this.first === null){
        this.first = node;
        this.last = node;
    } else {
        this.last.next = node;
        this.last = node;
    }
    return ++this.size;
};

// remove from the front
Queue.prototype.dequeue = function () {
    if(this.first === null) return null;
    
    let temp = this.first;
    
    if(this.first === this.last)
        this.last = null;
    this.first = this.first.next;
    this.size--;
    
    return temp.value;
};

Queue.prototype.peek = function () {
    return this.first.value;
};

Queue.prototype.toString = function () {
    if (this.start === null) return '[]';
    
    let str = '[';
    for (let current = this.first; current !== null; current = current.next) {
        if (current.value === null) {
            str += 'null';
        } else if (current.value === undefined) {
            str += 'undefined';
        } else {
            str += current.value.toString();
        }
        
        if (current.next !== null) {
            str += ',';
        }
    }
    str += ']';
    
    return str;
};