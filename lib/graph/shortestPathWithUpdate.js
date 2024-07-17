class shortestPathWithUpdate {
  /**
   * @param {number} n
   * @param {number[][]} edges
   */
  constructor(n, edges) {
    this.n = n;
    this.dist = Array(n)
      .fill()
      .map(() => new Uint32Array(n).fill(-1));
    for (var i = 0; i < n; ++i) this.dist[i][i] = 0;
    for (var [u, v, c] of edges) this.dist[u][v] = c;
    for (var k = 0; k < this.n; ++k) this.loop(k, k, 0);
  }

  /**
   * @param {number[]} edge
   * @return {void}
   */
  addEdge(edge) {
    var [u, v, c] = edge;
    if (this.dist[u][v] <= c) return;
    this.dist[u][v] = c;
    this.loop(u, v, c);
  }

  /**
   * @param {number} u
   * @param {number} v
   * @return {number}
   */
  shortestPath(u, v) {
    var res = this.dist[u][v];
    if (res === 4294967295) return -1;
    return res;
  }

  /**
   * @param {number} u
   * @param {number} v
   * @param {number} c
   */
  loop(u, v, c) {
    var dist = this.dist;
    for (var i = 0; i < this.n; ++i) {
      for (var j = 0; j < this.n; ++j) {
        dist[i][j] = Math.min(dist[i][j], dist[i][u] + c + dist[v][j]);
      }
    }
  }
}
