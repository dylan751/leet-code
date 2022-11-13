/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let missing = t.length;
  const need = {};
  t.split('').forEach((c) => (need[c] = (need[c] || 0) + 1));
  let i = 0;
  let I = 0;
  let J = 0;
  for (let j = 1; j <= s.length; j++) {
    const c = s[j - 1];
    if (!need[c]) need[c] = 0;
    missing -= need[c] > 0;
    need[c]--;
    if (!missing) {
      while (i < j && need[s[i]] < 0) {
        need[s[i]]++;
        i++;
      }
      if (!J || j - i <= J - I) {
        [I, J] = [i, j];
      }
    }
  }
  return s.substring(I, J);
};
