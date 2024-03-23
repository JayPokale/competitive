/**
 * @param {number[][]} edges
 * @returns {Map<number, number[][]>}
 */
var createGraph = function (edges) {
  /** @type {Map<number, number[][]>} */
  var graph = new Map();

  for (var [u, v, w] of edges) {
    if (graph.has(u)) graph.get(u).push([v, w]);
    else graph.set(u, [[v, w]]);
  }

  return graph;
};
