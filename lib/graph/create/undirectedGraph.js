/**
 * @param {number[][]} edges
 * @returns {Map<number, number[]>}
 */
var createGraph = function (edges) {
  /** @type {Map<number, number[]>} */
  var graph = new Map();

  var fill = (u, v) => {
    if (graph.has(u)) graph.get(u).push(v);
    else graph.set(u, [v]);
  };

  for (var [u, v] of edges) {
    fill(u, v);
    fill(v, u);
  }

  return graph;
};
