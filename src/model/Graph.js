/**
 * Graph implements a graph ADT, manages a set of nodes, and provides
 * a suite of graph search algorithms:
 *
 * TODO breadth first search
 * TODO Dijkstra's
 * TODO A*
 * TODO traveling sales-person (greedy algorithm)
 * TODO k-opt iterative optimitazion for TSP
 *
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import Node from "./Node";
import Edge from "./Edge";

function* idGenerator() {
  let id = 0;
  while (id > -1)
    yield id++;
}
let idGen = idGenerator();

export const Graph = () => {

  let nodes = new Map();

  return {
    getNodes: () => nodes,
    getNode: (id) => nodes.get(id),
    addNode: (node) => {
      nodes.set(idGen.next().value, node);
    },
    removeNode: (id) => {
      nodes.delete(id);
    },

    loadURL: (url) => new Promise(function (resolve, reject) {
      fetch(url)
        .then(response => response.json())
        .then(data => data.map(Graph.jsonToNode))
        .then(node => resolve(node))
        .catch(e => reject(e));
    }),

    print: () => {
      console.log(nodes);
    },

    // TODO bfs: (start, end) => {}

    // TODO dijkstra: (start, end) => {}

    // TODO aStar: (start, end) => {}

    jsonToNode: (json) => {
      let node = Object.create(Node);

      node.setLat(json.location.lat);
      node.setLon(json.location.lon);
      node.setAlt(json.location.alt);

      let edges = json.edges
        .map(Graph.jsonToEdge)
        .map((edge) => {
          edge.setStart(node);
          return edge;
        });
      node.setEdges(edges);

      addNode(node);

      return node;
    },

    jsonToEdge: (json) => {
      let e = Object.create(Edge);

      e.setEndCoordinates(
        json.destination.lon,
        json.destination.lat,
        json.destination.alt
      );

      return e;
    }
  };
};
