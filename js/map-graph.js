/**
 *
 */

import * as mapNode from "./map-node";
import * as mapEdge from "./map-edge";

// TODO make this a Map [UUID]-><mapNode>
// let nodes = new Map();
// nodes.set(uuid, Object.create(mapNode));
// nodes.get(uuid);
// nodes.delete(uuid);
let nodes = [];

export let getNodes = () => {
  return nodes;
}

// TODO implement with Map
export let getNode = (uuid) => {
  return null;
}

export let loadGraph = (dataUrl) => {
  // Fetch nodes from nodesUrl
  fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(datum => {
        // TODO Implement stampit, rather than assign manually?
        let n = Object.create(mapNode);
        // TODO Implement geolib
        n.setLat(datum.location.lat);
        n.setLon(datum.location.lon);
        n.setAlt(datum.location.alt);
        n.setType(datum.location.type);
        n.setName(datum.location.name);
        // TODO Load edges after all nodes are loaded; o/w UUIDs will not yet
        // be defined for each node.
        datum.edges.forEach(edge => {
          let e = Object.create(mapEdge);
          e.setStart(n);
          // TODO invoke setEnd() with new UUID strategy
          e.setEndCoordinates(
            edge.end_location.lon,
            edge.end_location.lat,
            edge.end_location.alt
          );
          n.addEdge(e);
        })
        nodes.push(n);
      });
    })
    .then(() => {
      console.log("Graph load complete.");
      console.log(nodes.length + " nodes loaded:");
      console.log(nodes);
    })
    .catch(e => console.log(e));
};
