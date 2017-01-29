const Node = require('./node');

class LinkedList {
    constructor() {
      this.nodes = [];
      this.length = 0;
      this._tail = null;
      this._head = null;
    }

    append(data) {
      this.nodes.push(new Node(data));
      this.length = this.nodes.length;
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
       return (this.length == 0);
    }

    clear() {
      this.length = 0;
      this._head.data = null;
      this._tail.data = null;
      this.nodes = [];
      return this;
    }

    deleteAt(index) {
      this.nodes[index].remove();
      return this;
    }

    reverse(array) {
      this.nodes.reverse();
       return this;
    }

    indexOf(data) {
      for(var i = 0; i < this.list.length; i++) {
            if (this.list[i].data === data) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
