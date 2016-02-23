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

import { readFile } from "fs";
import * as uuid from "uuid";
import Node from "./Node";
import Edge from "./Edge";

const Graph = () => {

  let nodes = new Map();

  const self = {
    getNodes: () => nodes,
    getNode: (id) => nodes.get(id),
    addNode: (node) => {
      const i = uuid.v1();
      node.setID(i);
      nodes.set(i, node);
      return self;
    },
    removeNode: (id) => {
      nodes.delete(id);
      return self;
    },

    loadFromURL: (url, cb) => {
      readFile(url, 'utf8', (err, data) => {
        if (err) return cb(err, null);
        try {
          JSON.parse(data).forEach(d => self.addNode(Node().loadJSON(d)));
        } catch (e) {
          cb(e, null);
        }
      });
      return self;
    },

    print: () => {
      console.log(self.getNodes());
    },

    // TODO bfs: (start, end) => {}

    // TODO dijkstra: (start, end) => {}

    // TODO aStar: (start, end) => {}

  };
  return self;
};

export default Graph;
