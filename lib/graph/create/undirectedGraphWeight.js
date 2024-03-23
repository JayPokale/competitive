/**
 * @param {number[][]} edges
 * @returns {Map<number, number[][]>}
 */
var createGraph = function (edges) {
  /** @type {Map<number, number[][]>} */
  var graph = new Map();

  var fill = (u, v, w) => {
    if (graph.has(u)) graph.get(u).push([v, w]);
    else graph.set(u, [[v, w]]);
  };

  for (var [u, v, w] of edges) {
    fill(u, v, w);
    fill(v, u, w);
  }

  return graph;
};
