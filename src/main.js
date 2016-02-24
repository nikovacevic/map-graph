/**
 * Entry point for CLI
 *
 * npm run build
 * node build/main.js data/test.json
 *
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import Graph from "./model/Graph";
import Node from "./model/Node";

console.log("----------------------------------------------------------------");
console.log("Node Graph\n");

const dataUrl = process.argv[2];

const graph = Graph();
graph.loadFromURL(dataUrl, function(err, data) {
  if (err) {
    console.error(err);
    return false;
  }

});

const promptAction = () => {
  console.log("[add (lon, lat, alt) ... Add node at coordinates");
  console.log("[rm  (lon, lat, alt) ... Remove node at coordinates");
};
