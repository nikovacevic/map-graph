import Graph from "./model/Graph";
import Node from "./model/Node";

console.log("----------------------------------");
console.log("Node Graph");
console.log("----------------------------------");

const dataUrl = process.argv[2];

console.log("Node: " + Node(1, 1, 1, []));

const graph = Graph();
console.log("Graph: " + graph);

graph.loadFromURL(dataUrl, function(err, data) {
  if (err) {
    console.error("ERROR: " + err);
    return false;
  }
  graph.print();
});
