class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  
  
  
  
  /**
   * Class to represent a queue using a SLL to store the queued items.
   * Follows a FIFO (First In First Out) order where new items are added to the
   * back and items are removed from the front.
   */
  class Queue{
    constructor(){
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
      /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty(){
      return this.front == null;
    }
  
      /**
     * Retrieves the data of the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    getFront(){
      //if check if empty return undefined if not return front.data
      if(this.isEmpty()){
        return undefined;
      }
      return this.front.data
    }
  
      /**
     * Adds a new item with the data to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(data){
      // instantiate new node
      const newNode = new Node(data);
      // check is queue is empty
      if(this.isEmpty()){
        //if empty set newNode as the whole line
        this.front = newNode;
        this.rear = newNode;
      } else {
        //place the newNode as the item after the rear in queue
        this.rear.next = newNode;
        // set the newNode to the rear.
        this.rear = newNode;
      }
      //add to size
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
    dequeue(){
      if(this.isEmpty()){
        return undefined;
      }
      const removed = this.front.data;
      this.front = this.front.next
      if (!this.front) {
        this.rear = null;
      }
      return removed;
    }
  
    // bonus
      /**
     * Check if the target value exists in the queue using the basic queueoperations (w/o contains)
     * @returns {Boolean } 
     */
    contains(targetVal) { //taking from one queue, adding (pushing q1's values) to (new) temp queue, iterating temp to see if it matches target
      let isMatch = false;
      const temp = new Queue();
      while(!this.isEmpty()){
        //dequeue
        const val = this.dequeue();
        temp.enqueue(val)
        
        if(val == targetVal) {
          isMatch = true;
        }
      }
      
      while(!temp.isEmpty()) {
        const tempData = temp.dequeue();
        this.enqueue(tempData); 
      }
      
      return isMatch;
      
    }
  
      printQueue(){ //for learning purpose
        if(this.isEmpty()){
          console.log("Empty Queue")
          return
        }
      console.log("Front: " + this.front.data);
      var runner = this.front;
      while(runner){
        console.log(runner.data)
        runner= runner.next;
      }
      console.log("Rear: " +this.rear.data);
    }
  }
  
  
  var q = new Queue();
  console.log(q.isEmpty())
  q.enqueue("a");
  q.enqueue("b");
  q.enqueue("c");
  q.enqueue("d");
  
  q.printQueue(); //expected: front: "a", rear : "d"
  
  q.dequeue(); 
  q.printQueue(); //expected: front: "b", rear : "d"
  console.log("======== Contains Tests ========");
  console.log(q.contains("c")) // expected: true
  q.printQueue()
  
  console.log(q.contains("x")) // expected: false
  
  
  
  
  