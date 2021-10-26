class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    while (vertexArray.length) {
      this.nodes.add(vertexArray.pop());
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let connection in vertex.adjacent) {
      connection.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let returnArr = [];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      returnArr.push(current.value);

      for (let node of current.adjacent) {
        if (!seen.has(node)) {
          toVisitStack.push(node);
          seen.add(node);
        }
      }

    }

    return returnArr;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    let returnArr = [];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      returnArr.push(current.value);

      for (let node of current.adjacent) {
        if (!seen.has(node)) {
          toVisitQueue.push(node);
          seen.add(node);
        }
      }

    }

    return returnArr;
  }
}

module.exports = { Graph, Node }