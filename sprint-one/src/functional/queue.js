var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;
  var nthLine = [];

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    size++;

    nthLine.push(counter);
    counter++;
  };

  someInstance.dequeue = function(){
    var current = storage[nthLine[0]];
    delete storage[nthLine[0]];
    size--;
    nthLine.shift();
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
