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

   };

    head() {
      return data._head;
    }

    tail(){
      return data._tail;
    }

    at(index) {
      return this.nodes.data;
    }

    insertAt(index, data) {
       var node = this.nodeAt(index);
       assert(node, '`insertAt`: Index out-of-bounds.');
       var previous = node.previous;
        var newNode = {
        value: value,
        next: node,
        previous: previous
       };
       node.previous = newNode;
       previous.next = newNode;

       this.length++;
    }

    isEmpty() {
       return this.length === 0;
    }

    clear() {
      this.length = 0;
      this._head = null;
      this._tail = null;
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
      if(this.length === 0) return;
      var indexOfFindedNode = -1;
      var searchedNode;
      this.nodes.forEach(function(item){
      if(item.data === data){
        searchedNode = item;
         }
      });
      indexOfFindedNode = this.nodes.indexOf(searchedNode);
      return indexOfFindedNode;
    }
}

module.exports = LinkedList;
