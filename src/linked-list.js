const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._tail = null;
      this._head = null;
      this.nodes = [];
    }

    append(data) {
     var node = new Node(data);

    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this._length++;

    return node;
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
       var node = new Node(data);
       if(this.nodes[index-1])this.nodes[index-1].appendChild(node);
       this.nodes.splice(index,0,node);
       this.length++;
       return this;
    }

    isEmpty() {
      return this.length == 0;
    }

    clear() {
      this.length = 0;
      this.nodes = [];
      this._head = null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {
      this.nodes[index].remove();
      return this;
    }

    reverse(array) {
      var next = null;
      var prev = null;
      var length = array.length;
      for (next = 0; next < length / 2; next += 1)
    {
      prev = length - 1 - next;
      var temporary = array[prev];
       array[next] = array[prev];
       array[prev] = temporary;
    }
      return array;
    }

    indexOf(data) {
      if(this.length == 0) return;
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
