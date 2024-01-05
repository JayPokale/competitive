var bisect = (arr, x, lo = 0, hi = arr.length) => {
  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < x) {
      lo = mid + 1;
    } else if (arr[mid] > x) {
      hi = mid;
    } else {
      return mid;
    }
  }
  return lo;
};

var bisectRight = (arr, x, lo = 0, hi = arr.length) => {
  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (arr[mid] <= x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

var bisectLeft = (arr, x, lo = 0, hi = arr.length) => {
  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};
