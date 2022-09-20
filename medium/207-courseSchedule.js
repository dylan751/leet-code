/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //create 2D array
  let graph = Array.from(new Array(numCourses), () => []);
  let indegree = new Array(numCourses).fill(0);
  let queue = [];
  buildGraph(numCourses, prerequisites);
  for (let ele of prerequisites) {
    indegree[ele[0]]++;
  }
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] == 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let curr = queue.shift();
      count++;
      for (let next of graph[curr]) {
        indegree[next]--;
        if (indegree[next] == 0) {
          queue.push(next);
        }
      }
    }
  }
  return count === numCourses;

  function buildGraph(numCourses, prerequisites) {
    for (let ele of prerequisites) {
      //use push
      graph[ele[1]].push(ele[0]);
    }
  }
};
