#include <bits/stdc++.h>
using namespace std;

auto init = []() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0;
}();

class Solution {
 public:
  double minTime(int n, int k, int m, vector<int>& time, vector<double>& mul) {
    using T = tuple<double, int, int, int>;
    priority_queue<T, vector<T>, greater<>> pq;
    sort(time.begin(), time.end(), greater<int>());

    int full = (1 << n) - 1;
    vector seen(1 << n, vector(m, vector(2, 1e300)));

    pq.emplace(0.0, 0, 0, 0);
    seen[0][0][0] = 0;

    while (!pq.empty()) {
      auto [t, side, mask, stage] = pq.top();
      pq.pop();
      if (t > seen[mask][stage][side]) continue;
      if (mask == full && side == 1) return floor(t * 1e5 + 0.5) / 1e5;

      if (side == 0) {
        int rem = (~mask) & full;
        for (int sub = rem; sub; sub = (sub - 1) & rem) {
          if (__builtin_popcount(sub) > k) continue;
          double slowest = (double)time[__builtin_ctz(sub)];
          double dt = slowest * mul[stage];
          int ns = (stage + (int)dt) % m;
          int nm = mask | sub;
          if (t + dt < seen[nm][ns][1]) {
            seen[nm][ns][1] = t + dt;
            pq.emplace(t + dt, 1, nm, ns);
          }
        }
      } else {
        for (int i = 0; i < n; ++i)
          if (mask & (1 << i)) {
            double dt = time[i] * mul[stage];
            int ns = (stage + (int)dt) % m;
            int nm = mask ^ (1 << i);
            if (t + dt < seen[nm][ns][0]) {
              seen[nm][ns][0] = t + dt;
              pq.emplace(t + dt, 0, nm, ns);
            }
          }
      }
    }
    return -1.0;
  }
};