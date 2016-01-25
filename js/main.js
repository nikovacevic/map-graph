import * as mapGraph from "./map-graph";

let dataUrl = "data/test.json";

console.log("Welcome to Map Graph!");

document.getElementById("loadGraph").addEventListener("click", () => {
  mapGraph.loadGraph(dataUrl);
});
