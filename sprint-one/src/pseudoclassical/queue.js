var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._total = 0;
  this._counter = 0;
  this._lineSpace = [];
  this._storage = {};
};

Queue.prototype.enqueue = function(value){
  this._storage[this._counter] = value;
  this._total++;
  this._lineSpace.push(this._counter);
  this._counter++;
}

Queue.prototype.dequeue = function(){
  var current = this._storage[this._lineSpace[0]];
  delete this._storage[this._lineSpace[0]];
  this._total--;
  this._lineSpace.shift();
  return current;
}

Queue.prototype.size = function(){
  if(this._total<0){
    return 0;
  }
  return this._total;
}

