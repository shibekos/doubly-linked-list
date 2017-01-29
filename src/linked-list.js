const Node = require('./node');

class LinkedList {
    constructor() {
      this.nodes = [];
      this.length = 0;
      this._tail = null;
      this._head = null;
    }

    append(data) {
    	var node = new Node(data);
        this.nodes.push(node);
        if(!this._tail && !this._head){
        this._tail = node;
        this._head = node;
      }
        this.length++;
        return this;
    }

    head() {
      if (this._head != null) {
        return this._head.data;
        } else {
          return null;
        }
    }
   
    tail(){
       if (this._tail != null) {
          return this._head.data;
        } else {
            return null;
        }
    }

    at(index) {
    	if (this._index != null) {
    		return this._index.data;
    	} else {
    		return null;
    	}
    }

    insertAt(index, data) {
       this.nodes.splice(index, 0, new Node(data));
       return this;
    }

    isEmpty() {
       return this.length == 0;
    }

    clear() {
      this.nodes = [];
      this.length = 0;
      this._head = null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {
      this.nodes.splice(index, 1);
      this.length = this.nodes.length;
      return this;
    }

    reverse(array) {
     var node_buf = {
            value: null,
            next: null,
            prev: null,
        }

        var node_head = this._head;
        var node_tail = this._tail;

        var i = 0;

        while (i < Math.floor(this.length / 2)) { 
            node_buf.value = node_tail.value;
            node_tail.value = node_head.value;
            node_head.value = node_buf.value;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }

        return this;
    }

    indexOf(data) {
     var count = 0;
     var currentElem = this._head;
      while (count < this.length){
       if (currentElem.data == data ) {
           return count;
        }
         currentElem = currentElem.next;
         count++;
        }
        return -1;
    }
}

module.exports = LinkedList;
