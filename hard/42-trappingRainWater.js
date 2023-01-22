/**
 * @param {number[]} height
 * @return {number}
 */

const trap = (height) => {
  let [l, r, lmax, rmax, max] = [0, height.length - 1, 0, 0, 0];

  while (l < r) {
    if (height[l] <= height[r]) {
      if (height[l] >= lmax) {
        lmax = height[l];
      } else {
        max += lmax - height[l];
      }
      l++;
    } else {
      if (height[r] >= rmax) {
        rmax = height[r];
      } else {
        max += rmax - height[r];
      }
      r--;
    }
  }
  return max;
};
