/**
 * map-edge implements a directed edge of a map-graph, described by a starting
 * map-node and an ending map-node.
 * @author Niko Kovacevic <nikovacevic@gmail.com>
 */

import * as mapNode from "./map-node";

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
