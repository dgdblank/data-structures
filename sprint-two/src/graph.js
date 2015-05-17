

var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.nodes.length; i++){
    return this.nodes[i] === node ? true : false;
    }
};

Graph.prototype.removeNode = function(node){
  var updatedNodes = [];
  this.forEachNode(function(part){
    if(part !== node){
      updatedNodes.push(part);
    }
  });
  this.nodes = updatedNodes;
};


Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for(var i = 0; i < this.nodes.length; i++){
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



