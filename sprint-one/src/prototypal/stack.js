var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.total = 0;

  return someInstance;
};

stackMethods = {};

stackMethods.size = function(){
  if(this.total < 0){
    return 0;
  }

  return this.total;
};

stackMethods.push = function(value){
  this.storage[this.total] = value;
  this.total++;
};

stackMethods.pop = function(){
  var current = this.storage[this.total - 1];
  delete this.storage[this.total - 1];
  this.total--;
  return current;
};
