/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == '') return 0;

  console.log(haystack.indexOf(needle));
  return haystack.indexOf(needle);
};

let haystack = 'aaaaa';
let needle = 'baa';
strStr(haystack, needle);
