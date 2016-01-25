/**
 * map-node implements a node of a map-graph, managing a set of directed edges
 * originating at this node.
 * TODO getNeighbors
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import * as mapEdge from "./map-edge";

let lon = 0.0,
    lat = 0.0,
    alt = 0.0,
    name = "",
    type = "",
    edges = [];

export let getLon = () => {
  return lon;
}
export let setLon = (l) => {
  lon = l;
}

export let getLat = () => {
  return lat;
}
export let setLat = (l) => {
  lat = l;
}

export let getAlt = () => {
  return alt;
}
export let setAlt = (a) => {
  alt = a;
}

export let getName = () => {
  return name;
}
export let setName = (n) => {
  name = n;
}

export let getType = () => {
  return type;
}
export let setType = (t) => {
  type = t;
}

export let getEdges = () => {
  return edges;
}
export let setEdges = (e) => {
  edges = e;
}
export let addEdge = (e) => {
  // TODO validate edge
  edges.push(e);
}
export let removeEdge = (e) => {
  edges = edges.filter(e => {
    return e.getStart()
  });
}
