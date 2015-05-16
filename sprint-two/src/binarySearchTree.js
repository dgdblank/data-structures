var BinarySearchTree = function(value){
  var bst = Object.create(binaryTreeMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  var traverse = function(node){
    if(value < node.value){
      if(node.left === null){
        node.left = BinarySearchTree(value);
      }
      else{
        traverse(node.left);
      }
    }
    else{
      if(node.right === null){
        node.right = BinarySearchTree(value);
      }
      else{
        traverse(node.right);
      }
    }
  }

  traverse(this);
}

binaryTreeMethods.contains = function(value){
 var result = false;

  var checkValue = function(node){
    debugger;
    if(value === node.value){
      return result = true;
      } else{
        if(value < node.value && node.left){
          checkValue(node.left);
        }
        else if (value > node.value && node.right){
          checkValue(node.right);
        }
       }
    };

  checkValue(this);
  return result;
}

binaryTreeMethods.depthFirstLog = function(callback){

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
