/**
 * @param {number[][]} edges
 * @returns {number[][]}
 */
var floydWarshall = function (n, edges) {
  var dist = Array(n)
    .fill()
    .map(() => new Uint32Array(n).fill(-1));
  for (var i = 0; i < n; ++i) dist[i][i] = 0;
  edges.forEach(([u, v, d]) => {
    dist[u][v] = d;
    dist[v][u] = d;
  });

  for (var k = 0; k < n; ++k) {
    for (var i = 0; i < n; ++i) {
      for (var j = 0; j < n; ++j) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  return dist;
};

module.exports = floydWarshall;
