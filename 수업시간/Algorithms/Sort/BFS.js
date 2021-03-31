const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const bfs = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들
  needVisit.push(startNode);
  while (needVisit.length > 0) {
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다. pop X
    console.log(needVisit);
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
      //1번 [b,c] 담김
      //2번 [c, a, d]
      //3번 [a,d,a,g,h,i]
      //4번 [a,g,h,u,b,e,f]
      //5번 [h, u, b, e, f, c] ....
    }
  }
  return visited;
};

console.log(bfs(graph, "A"));
