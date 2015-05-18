

var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	var result = false;
	for(var i = 0; i < this.nodes.length; i++){
		if(this.nodes[i] === node){
			return result = true;
		}
	}

	return result;
};

Graph.prototype.removeNode = function(node){
	var remain = [];
	for(var i = 0; i < this.nodes.length; i++){
		if( this.nodes[i] === node){
			continue
		}
		remain.push(this.nodes[i]);
	}

	this.nodes = remain;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var result = false;
	for(var i = 0; i < this.edges.length; i++){
		if(this.edges[i][0] === fromNode && this.edges[i][1] === toNode){
			return result = true;
		}
	}

	return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var edge = [fromNode, toNode];
	this.edges.push(edge);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var remain = [];
	for(var i = 0; i < this.edges.length; i++){
		if(this.edges[i][0] === fromNode && this.edges[1] === toNode){
			continue;
		}
		remain.push(this.edges[i]);
	}

	this.edges = remain;
};

Graph.prototype.forEachNode = function(cb){
	for(var i = 0; i < this.nodes.length; i++){
		cb(this.nodes[i]);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



