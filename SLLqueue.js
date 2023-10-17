class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using a SLL to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === null;
    }

    /**
     * Retrieves the data of the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    getFront() {
        return this.front ? this.front.data : undefined;
    }

    /**
     * Adds a new item with the data to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
        return this.size;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The data of the first item or undefined if empty.
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const removeData = this.front.data;
        this.front = this.front.next;
        this.size--;

        if (this.isEmpty()) {
            this.rear = null;
        }
        return removeData;
    }

    // bonus
    /**
     * Check if the target value exists in the queue using the  operations
     * @returns {Boolean }
     */
    contains(targetVal) {
        // Create a copy of the queue to preserve its original state
        const tempQueue = new Queue();

        while (!this.isEmpty()) {
            const frontItem = this.dequeue();

            // Check if the front item is equal to the target value
            if (frontItem === targetVal) {
                // Restore the original state of the queue
                while (!tempQueue.isEmpty()) {
                    this.enqueue(tempQueue.dequeue());
                }
                return true;
            }

            tempQueue.enqueue(frontItem);
        }

        // Restore the original state of the queue
        while (!tempQueue.isEmpty()) {
            this.enqueue(tempQueue.dequeue());
        }

        return false;
    }

    printQueue() {
        //for learning puspose
        console.log("Front: " + this.front.data);
        var runner = this.front;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
        console.log("Rear: " + this.rear.data);
    }
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");

q.printQueue(); //expected: front: "a", rear : "d"

q.dequeue();
q.printQueue(); //expected: front: "b", rear : "d"
