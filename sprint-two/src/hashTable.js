var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var list = LinkedList();
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === null){
  this._storage.set(i, list.addToTail([k,v]));
  }else{
    this._storage.list.addToTail([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var firstNode = this._storage.get(i);
  //using contains
    //traverse the nodes in storage[i]
      //when we get true
        //return Node
          //return value from Node


};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.each(function(value, index){
    //if(i === index){
  this._storage.set(i, null);
   // }
 // })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

