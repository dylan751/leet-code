/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // Base cases
  if (node == null) {
    return null;
  }
  if (node.neighbors.length === 0) {
    return {
      val: 1,
      neighbors: [],
    };
  }

  var cloneMap = new Map();

  return cloneNode(node, cloneMap);
};

var cloneNode = function (node, cloneMap) {
  // already cloned?
  if (cloneMap.has(node.val)) {
    return cloneMap.get(node.val);
  }

  // clone it
  var clone = {
    val: node.val,
    neighbors: [],
  };

  // clone it and add it to clone map
  cloneMap.set(node.val, clone);

  // clone every neighbor
  for (var i = 0; i < node.neighbors.length; i++) {
    var neighbor = node.neighbors[i];
    // clone the neighbor and added it
    clone.neighbors.push(cloneNode(neighbor, cloneMap));
  }

  return clone;
};
