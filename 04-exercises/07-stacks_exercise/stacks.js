/* Singly Linked List Implementation of a Stack */
function Node(value) {
    this.value = value;
    this.next = null;
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
        let temp = this.first;
        this.first = node;
        this.first.next = temp;
    }
    
    return ++this.size;
};

Stack.prototype.pop = function () {
    if(this.first === null) return null;
    
    let temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    
    this.first = this.first.next;
    this.size--;
    return temp.value;
};

// returns the first value in the stack
Stack.prototype.peek = function () {
    return this.first.value;
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

// test toString()
// let stack = new Stack();
// stack.push(100);
// stack.push(1000);
// stack.push(10000);
// stack.push(100000);
// console.log(stack.toString());
