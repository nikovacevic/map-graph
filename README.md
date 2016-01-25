# MapGraph

Graph implementation of a map in ECMAScript2015 (ES6).

Project structure and tooling based on [ES6 Tutorial](http://ccoenraets.github.io/es6-tutorial/) by @ccoenrates.

## Data

### test.json
Map nodes, described by a geographic location (latitude, longitude, altitude), name, type, and set of edges originating at this node.
```
{
  "location": {
    "lon": (float), // x-coordinate
    "lat": (float), // y-coordinate
    "alt": (float)  // z-coordinate
  },
  "name": (string),
  "type": (string),
  "edges": [
    {
      "end_location": {
        "lon": (float), // x-coordinate
        "lat": (float), // y-coordinate
        "alt": (float)  // z-coordinate
      },
      "name": (string),
      "type": (string)
    },
  ]
}
```

## Modules

### map-graph
Graph implementation. Manages a map of id => map-node objects.
- TODO Provide start-to-end route searching feature
- TODO Provide TSP search feature

### map-node
Node implementation. Manages node properties and set of map-edges originating at this node.  

### map-edge
Edge implementation. Manages edge properties.
