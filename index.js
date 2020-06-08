
const LinkedList = require('./LinkedList');

function display(list) {
    console.log(list.toArray());
    return;
}

function size(list) {
    var array = list.toArray();
    var size = array.length;
    return size;
}

function isEmpty(list) {
    if (!list.head && !list.tail) {
        return true;
    } else {
        return false;
    }
}

function findPrevious(list, item) {
    if (!list.head) return null;
    if (list.head.value === item) return null;
    let currentNode = list.head;
    while (currentNode.next) {
        if (currentNode.next.value === item) {
            return currentNode.value;
        } else {
            currentNode = currentNode.next;
        }

    }
    
}

function findLast(list) {
    if (!list.head) return null;
    let currentNode = list.head;
    if (!currentNode.next) return list.head;
    while(currentNode.next) {
        if (!currentNode.next.next) {
            return currentNode.next;
        } else {
            currentNode = currentNode.next;
        }
    }
}

// function cycleList(list) {
//     let currentNode = list.head;
//     for(let i = 0; i <= list.size; i++) {
        
//     }
// }

function sortList(list) {
   //pseudocode for naive sort:
   // 1. take first 2 items  - if first is higher then swap them
   //2. for next two items, if first is higher than second, find out if the second is higher or lower than the head.  If it's lower, it's the head.  If it's higher then just swap with the second
   // I will come back to this after I've done sorting algorithms because SERIOUSLY

        
    }
    return list;
}
let SLL = new LinkedList(["Apollo", "Boomer", "Helo", "Husker", "Starbuck"]);
let numberList = new LinkedList([3, 2, 5, 7, 1])
// console.log(SLL.toArray());
// SLL.append("Tauhida");
// console.log(SLL.toArray());
// SLL.delete("Husker");
// console.log(SLL.toArray());
// SLL.insertBefore("Athena", "Boomer");
// console.log(SLL.toArray());
// SLL.insertAfter("Hotdog", "Helo");
// console.log(SLL.toArray());
// SLL.insertAt("Kat", 3)
// console.log(SLL.toArray());
// SLL.deleteTail();
// console.log(SLL.toArray());
// console.log(display(SLL));
// console.log(size(SLL));
// console.log(isEmpty(SLL));
// console.log(findPrevious(SLL, 'Hotdog'));
// console.log(findLast(SLL));
// console.log(SLL.reverse());
// console.log(display(SLL));
// console.log(SLL.thirdFromTheEnd());
// console.log(SLL.findMiddleOfList());

console.log(sortList(numberList));
console.log(numberList.toArray());

//Mystery Program: this deletes any node that has the same value as the previous one

