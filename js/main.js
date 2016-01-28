import * as mapGraph from "./map-graph";

let dataUrl = "data/test.json";

console.log("Welcome to Map Graph!");

mapGraph.loadURL(dataUrl)
  .then(() => mapGraph.print())
  // TODO This one doesn't work. Why?
  // .then(mapGraph.print())
  .catch(e => console.log(e));
