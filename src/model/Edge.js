/**
 * Edge implements a directed edge of a Graph, described by an origin
 * Node and a destination Node.
 *
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import Node from "./Node";

/**
 * Edge factory function.
 * @param orig origin Node
 * @param dest destination Node
 */
const Edge = (orig, dest) => {

  let origin = orig,
      destination = dest;

  const self = {
    getOrigin: () => origin,
    setOrigin: (s) => {
      origin = s;
    },

    getDestination: () => destination,
    setDestination: (e) => {
      destination = e;
    }
  };
  return self;
};

export default Edge;
