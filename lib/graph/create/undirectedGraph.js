/**
 * @param {number[][]} edges
 * @returns {Map<number, number[]>}
 */
var buildGraph = function (edges) {
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

/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number[][]}
 */
var buildGraph = function (n, edges) {
  /** @type {number[][]} */
  var graph = Array.from({ length: n }, () => []);

  var fill = (u, v) => {
    graph[u].push(v);
  };

  for (var [u, v] of edges) {
    fill(u, v);
    fill(v, u);
  }

  return graph;
};
