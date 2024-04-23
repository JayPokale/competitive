/**
 * @param {number[][]} edges
 * @returns {Map<number, number[][]>}
 */
var buildGraph = function (edges) {
  /** @type {Map<number, number[][]>} */
  var graph = new Map();

  var fill = (u, v, w) => {
    if (graph.has(u)) graph.get(u).push([v, w]);
    else graph.set(u, [[v, w]]);
  };

  for (var [u, v, w] of edges) {
    fill(u, v, w);
  }

  return graph;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number[][][]}
 */
var buildGraph = function (n, edges) {
  /** @type {number[][][]} */
  var graph = Array.from({ length: n }, () => []);

  var fill = (u, v, w) => {
    graph[u].push([v, w]);
  };

  for (var [u, v, w] of edges) {
    fill(u, v, w);
    fill(v, u, w);
  }

  return graph;
};
