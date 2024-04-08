/**
 * @param {number[][]} edges
 * @returns {Map<number, number[]>}
 */
var buildGraph = function (edges) {
  /** @type {Map<number, number[]>} */
  var graph = new Map();

  for (var [u, v] of edges) {
    if (graph.has(u)) graph.get(u).push(v);
    else graph.set(u, [v]);
  }

  return graph;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number[][]>}
 */
var buildGraph = function (n, edges) {
  /** @type {number[][]} */
  var graph = Array(n)
    .fill()
    .map(() => []);

  for (var [u, v] of edges) {
    graph[u].push(v);
  }

  return graph;
};
