/**
 * Node implements a node of a Graph, managing a set of directed edges
 * originating at this node.
 *
 * TODO getNeighbors
 *
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import Edge from "./Edge";

/**
 * Node factory function.
 * @param lon longitude coordinate (float)
 * @param lat latitude coordinate (float)
 * @param lat latitude coordinate (float)
 * @param edg edges w/ origin at this Node (Array<Edge>)
 */
export const Node = (lon, lat, alt, edg) => {

  let longitude = lon,
      latitude = lat,
      altitude = alt,
      edges = edg;

  return {
    getLongitude: () => longitude,
    setLongitude: (l) => {
      longitude = l;
    },

    getLatidude: () => latitude,
    setLatitude: (l) => {
      latitude = l;
    },

    getAltitude: () => altitude,
    setAltitude: (a) => {
      altitude = a;
    },

    getEdges: () => edges,
    setEdges: (e) => {
      edges = e;
    },
    addEdge: (e) => edges.push(e),
    removeEdge: (r) => {
      edges = edges.filter(e => e !== r);
    }
  };
};
