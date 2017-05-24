import { assign } from 'lodash';
const LOCATIONS = 17

const arr = new Array(LOCATIONS).fill(0)

const PinWheels = arr.map((l, i) => {
  return {
    index: i,
    even: i % 2 === 0,
    top: (i % 2 === 0) ? -2 : 0,
    left: (i % 2 === 0) ? 8 : 0,
    rotation: (i % 2 === 0) ? 30 : 30
  }
})

const MapPositions = [{
    x: 0.6,
    y: 2.6,
  }, {
    x: 8.3,
    y: 22.1,
  }, {
    x: 8.5,
    y: 36.1,
  }, {
    x: 13.6,
    y: 48.2,
  }, {
    x: 15.3,
    y: 61.6,
  }, {
    x: 27.4,
    y: 61.6,
  }, {
    x: 44.1,
    y: 61.6,
  }, {
    x: 52.4,
    y: 48.7,
  }, {
    x: 58.7,
    y: 48.7,
  }, {
    x: 79.6,
    y: 61.5,
  }, {
    x: 83.1,
    y: 48.7,
  }, {
    x: 87.8,
    y: 40.6,
  }, {
    x: 87.8,
    y: 19,
  }, {
    x: 87.8,
    y: 2.4,
  }, {
    x: 95.7,
    y: 91.7,
  }, {
    x: 77.7,
    y: 91.7,
  }, {
    x: 87.8,
    y: 61.5,
  }]
  .map((pos, i) => (assign({}, pos, { index: i })))

  const ALHAMBRA = [
  { id: 'loc0', latitude: 37.7987, longitude: -122.42243, radius: 13 },
  { id: 'loc1', latitude: 37.79831, longitude: -122.42219, radius: 13 },
  { id: 'loc2', latitude: 37.79812, longitude: -122.42214, radius: 12 },
  { id: 'loc3', latitude: 37.79795, longitude: -122.42186, radius: 12 },
  { id: 'loc4', latitude: 37.797872, longitude: -122.421611, radius: 11 },
  { id: 'loc5', latitude: 37.79793, longitude: -122.42119, radius: 16 },
  { id: 'loc6', latitude: 37.797967, longitude: -122.420609, radius: 12 },
  { id: 'loc7', latitude: 37.79815, longitude: -122.42043, radius: 12 },
  { id: 'loc8', latitude: 37.79819, longitude: -122.42002, radius: 16 },
  { id: 'loc9', latitude: 37.798147, longitude: -122.419659, radius: 16 },
  { id: 'loc10', latitude: 37.7983, longitude: -122.41925, radius: 16 },
  { id: 'loc11', latitude: 37.798566, longitude: -122.419047, radius: 13 },
  { id: 'loc12', latitude: 37.7989, longitude: -122.41911, radius: 13 },
  { id: 'loc13', latitude: 37.799100, longitude: -122.419140, radius: 12 },
  { id: 'loc14', latitude: 37.79761, longitude: -122.41869, radius: 15 },
  { id: 'loc15', latitude: 37.798639, longitude: -122.418456, radius: 13 },
  { id: 'loc16', latitude: 37.79811, longitude: -122.41894, radius: 16 },
]


const Locations = [{
  name:"hydrant",
  color: "#fe0000"
}, {
  name:"alhambra",
  color: "#00a6d3"
}, {
  name:"folie",
  color: "#fb7130"
}, {
  name:"bricks",
  color: "#3bc901"
}, {
  name:"yellowpole",
  color: "#fef200"
}, {
  name:"susan",
  color: "#c51a20"
}, {
  name:"bumpies",
  color: "#fdb813"
}, {
  name:"garages",
  color: "#ebdebb"
}, {
  name:"doorway",
  color: "#561801"
}, {
  name:"diamonds",
  color: "#40fff5"
}, {
  name:"nails",
  color: "#134199"
}, {
  name:"za",
  color: "#ff000a"
}, {
  name:"hyde",
  color: "#b6c3d6"
}, {
  name:"swensens",
  color: "#dd725e"
}, {
  name:"stairs",
  color: "#ffffff"
}, {
  name:"park",
  color: "#ff6c7e"
}, {
  name:"fold",
  color: "#99f7d5"
}]



module.exports = { PinWheels, MapPositions, Locations,ALHAMBRA }
