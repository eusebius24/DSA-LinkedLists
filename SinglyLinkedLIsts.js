class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
        this.length++;
        return this;
    }

    insertLast(item) {
        if(!this.head) {
            this.insertFirst(item);
        }
        else {
           let tempNode = this.head;
           while(tempNode.next !== null) {
               tempNode = tempNode.next;
           }
           tempNode.next = new _Node(item, null);
           this.tail = tempNode.next;
           this.length++;
           return this;
        }
    }

    insertBefore(item, key) {
        if(!this.head) {
            this.insertFirst(item)
        } else {
            let newNode = new _Node(item);
            console.log("newNode: ", newNode)
            let currNode = this.head;
            while (currNode.next) {
                if(currNode.next.val === key) {
                    newNode.next = currNode.next;
                    currNode.next = newNode;
                    return;
                } else {  
                    currNode = currNode.next;
                }  
            
            }
        
        }
    }

    // insertAfter(item, key) {
    //     if(!this.head) {
    //         this.insertFirst(item);
    //     } else {
    //         let newNode = new _Node(item);
    //         console.log(newNode);
    //         const pre = this.find(key);
    //         console.log("pre: ", pre);
    //         const aft = pre.next;
            
    //         console.log("aft: ", aft);
    //         pre.next = newNode;
    //         newNode.next = aft;
    //     }   
            
        
    // }
    find(item) {
        let currNode = this.head;
        if(!this.head) {
            return null;
        } 
        while (currNode.val !== item) {
            if(currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        } 
        console.log('found node: ', currNode);
        return currNode;
    }
    

    remove(item, deleteOne = false) {
       if(!this.head) return false;
       let deletedNode = null;

       //If head needs to be deleted
       while(this.head && this.head.value === item) {
            this.length--;
            deletedNode = this.head;
            this.head = this.head.next;
            if(deleteOne) return true;
       }
       let currNode = this.head;

       //If any node except the head or tail needs to be deleted
       if(currNode !== null) {
           while (currNode.next) {
               if (currNode.next.value === item) {
                   this.length--;
                   deletedNode = currNode.next;
                   console.log("deletedNode: ", deletedNode);
                   currNode.next = currNode.next.next;
                   if(deleteOne) return true;
               } else {
                   currNode = currNode.next;
               }
           }
       }

       //If the tail needs to be deleted
        if (this.tail.value === item) {
            this.tail = currNode;
        }
        if (deletedNode === null) {
            return false;
        } else {
            return true;
        }
    }

    toArray() {
        const nodes = [];
    
        let currentNode = this.head;
        while (currentNode) {
          nodes.push(currentNode);
          currentNode = currentNode.next;
        }
        console.log("nodes: ", nodes);
        return nodes;
      }
    
    }

    

function main() {
    const SLL = new LinkedList();
    let newNode = new _Node("Apollo")
    SLL.insertFirst(newNode);
    newNode = new _Node("Boomer")
    SLL.insertLast(newNode);
    newNode = new _Node("Helo")
    SLL.insertLast(newNode);
    newNode = new _Node("Husker")
    SLL.insertLast(newNode);
    newNode = new _Node("Starbuck")
    SLL.insertLast(newNode);
    newNode = new _Node("Tauhida")
   console.log("newNode: ", newNode);
    SLL.insertLast(newNode);
    console.log(SLL.toArray());

    console.log(SLL.remove("Husker"));
    console.log("SLL after removal: ", SLL.toArray());
    // SLL.find("Starbuck")
    // SLL.insertBefore("Athena", "Boomer");
    // SLL.insertAfter('Isaac', 'Helo');
    return SLL;


}
console.log(main());
