/**
 * Node implements a node of a Graph, managing a set of directed edges
 * originating at this node.
 *
 * TODO getNeighbors
 *
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import * as util from "util";
import Edge from "./Edge";

/**
 * Node factory function.
 * @param lon longitude coordinate (float)
 * @param lat latitude coordinate (float)
 * @param lat latitude coordinate (float)
 * @param edg edges w/ origin at this Node (Array<Edge>)
 */
const Node = (lon, lat, alt, edg) => {

  let id,
      longitude = lon,
      latitude = lat,
      altitude = alt,
      edges = edg;

  const self = {
    getLongitude: () => longitude,
    setLongitude: (l) => {
      longitude = l;
      return self;
    },

    getLatitude: () => latitude,
    setLatitude: (l) => {
      latitude = l;
      return self;
    },

    getAltitude: () => altitude,
    setAltitude: (a) => {
      altitude = a;
      return self;
    },

    getEdges: () => edges,
    setEdges: (e) => {
      edges = e;
      return self;
    },
    addEdge: (e) => {
      edges.push(e);
      return self;
    },
    removeEdge: (r) => {
      edges = edges.filter(e => e !== r);
      return self;
    },

    getID: () => id,
    setID: (i) => {
      id = i;
      return self;
    },

    toString: () => util.format("%j", self),

    loadJSON: (json) => {
      self.setLongitude(json.location.lon);
      self.setLatitude(json.location.lat);
      self.setAltitude(json.location.alt);
      self.setEdges(json.edges);
      return self;
    }
  };
  return self;
};

export default Node;
