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

  console.log("Creating node:");
  console.log("Lat:" + lat);
  console.log("Lon:" + lon);
  console.log("Alt:" + alt);
  console.log("Edges:" + edg);

  const self = {
    getLongitude: () => longitude,
    setLongitude: (l) => {
      longitude = l;
      return this;
    },

    getLatitude: () => latitude,
    setLatitude: (l) => {
      latitude = l;
      return this;
    },

    getAltitude: () => altitude,
    setAltitude: (a) => {
      altitude = a;
      return this;
    },

    getEdges: () => edges,
    setEdges: (e) => {
      edges = e;
      return this;
    },
    addEdge: (e) => edges.push(e),
    removeEdge: (r) => {
      edges = edges.filter(e => e !== r);
      return r;
    },

    getID: () => id,
    setID: (i) => {
      id = i;
      return this;
    },

    toString: () => {
      return util.format("%j", this);
    },

    loadJSON: (json) => {
      self.setLongitude(json.location.lon);
      self.setLatitude(json.location.lat);
      self.setAltitude(json.location.alt);
      self.setEdges(json.edges);
      return this;
    }
  };
  console.log(self);
  return self;
};

export default Node;
