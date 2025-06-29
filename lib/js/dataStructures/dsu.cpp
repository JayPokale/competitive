#include <bits/stdc++.h>
using namespace std;

auto initializer = []() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0;
}();

class Solution {
 public:
  struct DSU {
    vector<int> parent, rankv;
    DSU(int n) : parent(n), rankv(n, 0) {
      iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) { return parent[x] == x ? x : parent[x] = find(parent[x]); }
    bool unite(int a, int b) {
      a = find(a);
      b = find(b);
      if (a == b) return false;
      if (rankv[a] < rankv[b]) swap(a, b);
      parent[b] = a;
      if (rankv[a] == rankv[b]) rankv[a]++;
      return true;
    }
  };
};