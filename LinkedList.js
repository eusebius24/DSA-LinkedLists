const LinkedListNode = require('./LinkedListNode');

class LinkedList {
    constructor(value) {
        this.size = 0;
        this.head = null;
        this.tail = null;

        if(value) {
            if (Array.isArray(value)) return this.fromArray(value);
            return new TypeError(value + 'is not iterable');
        }

        return this;
    }

    prepend(value) {
        this.size += 1;

        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;
        if(!this.tail) this.tail = newNode;
        return this;
    }

    append(value) {
        this.size += 1;

        const newNode = new LinkedListNode(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    insertBefore(value, key) {
        if(!this.head) return false;
        let newNode = new LinkedListNode(value);
        let currentNode = this.head;
        if (currentNode.value === key) {
            this.prepend(value);
            return true;
        }

        while (currentNode.next) {
            if (!currentNode.next && currentNode !== key) {
                return false;
            }
            else if (currentNode.next.value === key) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.size += 1;
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
    }

    insertAfter(value, key) {
        if(!this.head) return false;
        let newNode = new LinkedListNode(value);
        let pre = this.find(key);
        if (!pre) return false;
        console.log(pre);
        let aft = pre.next;
        console.log(aft);
        pre.next = newNode;
        newNode.next = aft;
        this.size += 1;
        return true;
        
    }

    insertAt(value, index) {
        if(!this.head) return false;
        let newNode = new LinkedListNode(value);
        let counter = 0;
        let currentNode = this.head;
        if (counter === index) {
            this.prepend(value);
            return true;
        }
        if (counter === this.size) {
            this.append(value);
            return true;
        }
        while (counter !== index - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        console.log("currentNode: ", currentNode);
        const pre = currentNode;
        const aft = currentNode.next;
        pre.next = newNode;
        newNode.next = aft;
        this.size += 1;
        return true;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));
        return this;
    }

    toArray(useNodes = false) {
        const nodes =[];
        let currentNode = this.head;
        while(currentNode) {
            nodes.push(useNodes ? currentNode : currentNode.value)
            currentNode = currentNode.next;
        }
        return nodes;
    }

    delete(value, deleteOne = false) {
        if(!this.head) return false;
        let deletedNode = null;

        //IF the head needs to be deleted
        while (this.head && this.head.value === value) {
            this.size -= 1;
            deletedNode = this.head;
            this.head = this.head.next;
            if(deleteOne) return true;
        }

        let currentNode = this.head;

        //If any node except the head or tail needs to be deleted

        if(currentNode !== null) {
            while(currentNode.next) {
                if (currentNode.next.value === value) {
                    this.size -= 1;
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    if (deleteOne) return true;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        //If the tail needs to be deleted
        if (this.tail.value === value) {
            this.tail = currentNode;
        } else {
            return true;
        }
    }

    deleteHead() {
        if(!this.head) return false;

        this.size -= 1;
        const deletedHead = this.head;

        if(this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        return true;
    }

    deleteTail() {
        if(this.size === 0) return false;

        if(this.size === 1) {
            if(this.head === null) {
                return false;
            } else {
                this.head = null;
                this.tail = null;
                this.size -= 1;
                return true;
            }
        }

        const deletedTail = this.tail;

        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                this.size -= 1;
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        console.log("tail: ", this.tail);
        return deletedTail;
    }

    includes(value) {
        if (!this.head) return false;

        let isNode = value.constructor.name === 'LinkedListNode';
        if (isNode) value = value.value;

        let currentNode = this.head;

        while (currentNode) {
            if (value !== undefined && value === currentNode.value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        if(!this.head) return undefined;

        let currentNode = this.head;

        while (currentNode.value !== value) {
            if (currentNode.next === null) {
                return null;
            } else {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        console.log("size: ", this.size);
        for (let i = 0; i < this.size; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        console.log("this: ", this);
        return this;
           

    }

    thirdFromTheEnd() {
        if (!this.head) return null;
        var currentNode = this.head;

        while(currentNode.next.next.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findMiddleOfList() {
        if(!this.head) return undefined;
        let counter = 1;
        let current = this.head;
        while(current.next) {
            counter++;
            current = current.next;
        }
        let halfLength = counter/2;
        if(counter % 2 !== 0) {
            halfLength = Math.round(halfLength);
        }

        counter = 1;
        current = this.head;
        while (counter !== halfLength) {
            counter++;
            current = current.next;
        }
        return current;
    }
       
}


module.exports = LinkedList;