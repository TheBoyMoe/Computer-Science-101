/* Singly Linked List Implementation of a Stack */
function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

function Stack() {
    this.first = null;
    this.last = null;
    this.size = 0;
}


Stack.prototype.push = function (value) {
    let node = new Node(value);
    
    if(this.first === null){
        this.first = node;
        this.last = node;
    } else {
        this.last.next = node;
        node.prev = this.last;
        this.last = node;
    }
    
    return ++this.size;
};

Stack.prototype.pop = function () {
    
    if(this.last === null) return null;
    
    let temp = this.last;
    // list has one element
    if(this.first === this.last){
        this.first = null;
    }
    this.last = this.last.prev;
    this.size--;
    return temp.value;
};


// returns the first value in the stack
Stack.prototype.peek = function () {
    return this.last.value;
};

// return all the values in the stack
Stack.prototype.toString = function () {
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


// let stack = new Stack();

// stack.push(100);
// stack.push(1000);
// stack.push(10000);
// stack.push(100000);
// console.log(stack.toString());


// stack.push(10)
// console.log(stack.first.value)
// console.log(stack.last.value)
// stack.push(100)
// console.log(stack.first.value)
// console.log(stack.last.value)
// stack.push(1000)
// console.log(stack.first.value)
// console.log(stack.last.value)