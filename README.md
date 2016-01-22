# MapGraph

Graph implementation of a map in ECMAScript2015 (ES6).

## Data
### nodes.json
Map nodes, uniquely described by a geographic location (latitude, longitude, altitude). Additional, optional information: name, type.
```
{
    "location": {
        "lon": (float), // x-coordinate
        "lat": (float), // y-coordinate
        "alt": (float)  // z-coordinate
    },
    "name": (string),
    "type": (string)
}
```
### edges.json
Map edges, directed edges described by geographic locations (latitude, longitude, altitude) of termini. Additional, optional information: name, type, rate  in mph.
```
{
    "start": {
        "lon": (float), // x-coordinate
        "lat": (float), // y-coordinate
        "alt": (float)  // z-coordinate
    },
    "end": {
        "lon": (float), // x-coordinate
        "lat": (float), // y-coordinate
        "alt": (float)  // z-coordinate
    },
    "name": (string),
    "type": (string),
    "rate": (double)    // mph
}
```

## Functionality

## Modules

## Technology
- core logic written in JavaScript (ECMAScript2015/ES6)

- npm for ____
  - http-server for serving
  - babel for transpiling into cross-browser-compatible JavaScript
  - webpack for ____
