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
import { readFile } from "fs";
import * as uuid from "uuid";

const Graph = () => {

  let nodes = new Map();

  const self = {
    getNodes: () => nodes,
    getNode: (id) => nodes.get(id),
    addNode: (node) => {
      const i = uuid.v1();
      node.setID(i);
      nodes.set(i, node);
      return node;
    },
    removeNode: (id) => nodes.delete(id),

    // TODO use streams
    loadFromURL: (url, cb) => {
      readFile(url, 'utf8', (err, data) => {
        if (err) return cb(err, null);
        try {
          const jsonData = JSON.parse(data);
          jsonData.forEach((d) => {
            let n = Node().loadJSON(d);
            self.addNode(n);
          });
        } catch (e) {
          console.log(e);
        }
      });
    },

    print: () => {
      console.log(getNodes());
    },

    // TODO bfs: (start, end) => {}

    // TODO dijkstra: (start, end) => {}

    // TODO aStar: (start, end) => {}

  };
  return self;
};

export default Graph;
