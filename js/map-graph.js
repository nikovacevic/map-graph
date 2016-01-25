/**
 * map-graph implements a graph ADT, manages a set of nodes, and provides
 * a suite of graph search algorithms:
 * TODO breadth first search
 * TODO Dijkstra's
 * TODO A*
 * TODO traveling sales-person (greedy algorithm)
 * TODO k-opt iterative optimitazion for TSP
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import * as mapNode from "./map-node";
import * as mapEdge from "./map-edge";

let nodes = new Map();

function* idGenerator() {
  let id = 0;
  while (id > -1)
    yield id++;
}
let idGen = idGenerator();

export let getNodes = () => {
  return nodes;
}

export let getNode = (id) => {
  return nodes.get(id);
}

export let addNode = (node) => {
  nodes.set(idGen.next().value, node);
}

export let removeNode = (id) => {
  nodes.delete(id);
}

// TODO export let bfs = (start, end) => {}

// TODO export let dijkstra = (start, end) => {}

// TODO export let aStar = (start, end) => {}

export let loadGraph = (dataUrl) => {
  // Fetch nodes from nodesUrl
  fetch(dataUrl)
    .then(response => response.json())
    .then(data => data.map(jsonToNode))
    .then(printGraph)
    .catch(e => console.log(e));
};

let jsonToNode = (json) => {
  let node = Object.create(mapNode);

  node.setLat(json.location.lat);
  node.setLon(json.location.lon);
  node.setAlt(json.location.alt);
  node.setType(json.location.type);
  node.setName(json.location.name);

  let edges = json.edges
    .map(jsonToEdge)
    .map((edge) => {
      edge.setStart(node);
      return edge;
    });
  node.setEdges(edges);

  addNode(node);
}

let jsonToEdge = (json) => {
  let e = Object.create(mapEdge);

  e.setEndCoordinates(
    json.end_location.lon,
    json.end_location.lat,
    json.end_location.alt
  );

  return e;
}

let printGraph = () => {
  console.log(nodes.size + " nodes loaded:");
  console.log(nodes);
}
