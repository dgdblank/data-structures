var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.total = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.total] = value;
  this.total++;
}

Stack.prototype.pop = function(){
  var current = this.storage[this.total -1];
  delete this.storage[this.total-1];
  this.total--;
  return current;
}

Stack.prototype.size = function(){
  if(this.total<0){
    return 0;
  }
  return this.total;
}
