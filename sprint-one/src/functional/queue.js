var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;
  var lineSpace = [];

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    size++;

    lineSpace.push(counter);
    counter++;
  };

  someInstance.dequeue = function(){
    var current = storage[lineSpace[0]];
    delete storage[lineSpace[0]];
    size--;
    lineSpace.shift();
    return current;

  };

  someInstance.size = function(){
    if(size<0){
      return 0;
    }
    return size;
  };

  return someInstance;
};
