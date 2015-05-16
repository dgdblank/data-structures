var BinarySearchTree = function(value){
  this.root = value;
  this.left = null;
  this.right = null;

};


BinarySearchTree.prototype.insert = function(value){
  var traverse = function(node){
        //if our value is less than node
    if(value<this.root){
      if(this.left === null){
        this.left = BinarySearchTree(value);
      }
      else{
        traverse(this.left);
      }
      //this.left = value;
    }
    else{
      if(this.right === null){
        this.right = BinarySearchTree(value);
      }
      else{
        traverse(this.right);
      }
    }
    //else
      //this.right = value;
  }

}

BinarySearchTree.prototype.contains = function(value){

}

BinarySearchTree.prototype.depthFirstLog = function(callback){

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
