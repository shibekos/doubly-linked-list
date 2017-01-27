const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._tail = null;
      this._head = null;
      this.nodes = [];
    }

    append(data) {
        this.list.push(new Node(data));
        this.length = this.list.length;
        return this;
    }

    head() {
        return this.list.length > 0 ? this.list[0].data : null;
    }

    tail() {
        return this.list.length > 0 ? this.list[this.list.length-1].data : null;
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data) {
        this.list.splice(index, 0, new Node(data));
        this.length = this.list.length;
        return this;
    }

    isEmpty() {
        return !this.list.length;
    }

    clear() {
        this.list.length = 0;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        this.list.splice(index, 1);
        this.length = this.list.length;
        return this;
    }

    reverse() {
        this.list.reverse();
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
