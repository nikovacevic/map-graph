/**
 *
 */

import * as mapNode from "./map-node";

// TODO resolve unique identification
// There could exist two or more edges with the same start and end locations,
// type and name.
// TODO implement node-uuid

let start = null,
    end = null,
    name = "",
    type = "";

export let getStart = () => {
  return start;
}
export let setStart = (s) => {
  start = s;
}
export let setStartCoordinates = (lon, lat, alt) => {
  start = Object.create(mapNode);
  start.setLon(lon);
  start.setLat(lat);
  start.setAlt(alt);
}

export let getEnd = () => {
  return end;
}
export let setEnd = (e) => {
  end = e;
}
export let setEndCoordinates = (lon, lat, alt) => {
  end = Object.create(mapNode);
  end.setLon(lon);
  end.setLat(lat);
  end.setAlt(alt);
}

export let getName = () => {
  return name;
}
export let setName = (n) => {
  name = n;
}

export let getType = () => {
  return type;
}
export let setType = (t) => {
  type = t;
}
