var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._list = LinkedList();
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === null){
  this._storage.set(i, this._list.addToTail([k,v]));
  }else{
    this._list.addToTail([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var current = this._list.head;
  var result;
    while(current !== null){
      if(current.value[0] === k){
        return result = current.value[1];
      }

      current = current.next;
    }

    return result;
};



HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var previous = null;
  var current = this._list.head;
  var result;
  while(current !== null){
    if(current.value[0] === k){
      previous = current.next;
      return result = current;
    } else {
      current = current.next;
    }
  }

  return result;
};

HashTable.prototype.findK = function(k, listHead){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

