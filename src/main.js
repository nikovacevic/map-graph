import Graph from "./model/Graph";

console.log("----------------------------------");
console.log("Node Graph");
console.log("----------------------------------");

const dataUrl = "data/test.json";

Graph.loadURL(dataUrl)
  .then(Graph.print)
  .catch(e => console.log(e));
