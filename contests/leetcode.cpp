#include <bits/stdc++.h>
using namespace std;

auto init = []() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0;
}();

int dir[5] = {-1, 0, 1, 0, -1};

class Solution {
 public:
  int minMoves(vector<string>& room, int energy) {
    int n = room.size(), m = room[0].size();
    int sx, sy, cnt = 0;
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < m; ++j) {
        if (room[i][j] == 'S') sx = i, sy = j;
        else if (room[i][j] == 'L') room[i][j] = '0' + cnt++;
      }
    }

    int mt = (1 << cnt) - 1, res = 0;
    queue<tuple<int, int, int, int>> q;  // x,y,mask,energy
    q.emplace(sx, sy, 0, energy);
    vector dp(n, vector(m, vector(mt + 1, -1)));
    dp[sx][sy][0] = energy;

    while (!q.empty()) {
      int sz = q.size();
      while (sz--) {
        auto [x, y, t, e] = q.front();
        q.pop();
        if (t == mt) return res;
        if (e == 0) continue;

        for (int i = 0; i < 4; ++i) {
          int nx = x + dir[i], ny = y + dir[i + 1];
          if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
          if (room[nx][ny] == 'X') continue;
          int ne = e - 1, nt = t;
          if (room[nx][ny] == 'R') {
            ne = energy;
          } else if (room[nx][ny] >= '0' && room[nx][ny] <= '9') {
            nt |= 1 << (room[nx][ny] - '0');
          }
          if (dp[nx][ny][nt] < ne) {
            dp[nx][ny][nt] = ne;
            q.emplace(nx, ny, nt, ne);
          }
        }
      }
      ++res;
    }
    return -1;
  }
};