var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.total = 0;
  someInstance.counter = 0;
  someInstance.lineSpace = [];
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.counter] = value;
  this.total++;
  this.lineSpace.push(this.counter);
  this.counter++;
}

queueMethods.dequeue = function(){
  var current = this.storage[this.lineSpace[0]];
  delete this.storage[this.lineSpace[0]];
  this.total--;
  this.lineSpace.shift();
  return current;
}

queueMethods.size = function(){
  if(this.total<0){
    return 0;
  }
  return this.total;
}




