var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){

  var result = false;
  var checkChildren = function(tree){
    if(tree.value === target){
      return result = true;
    } else{
      for(var i = 0; i < tree.children.length; i++){
          checkChildren(tree.children[i])
     }
   }
  }

  checkChildren(this)
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
