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
    x: .9,
    y: 3.2,
  }, {
    x: 8.5,
    y: 22.1,
  }, {
    x: 8.5,
    y: 36.1,
  }, {
    x: 13.7,
    y: 48.1,
  }, {
    x: 15.3,
    y: 62.1,
  }, {
    x: 27.1,
    y: 62.1,
  }, {
    x: 44.1,
    y: 62.1,
  }, {
    x: 52.2,
    y: 48.4,
  }, {
    x: 58.7,
    y: 48.4,
  }, {
    x: 79.1,
    y: 62.1,
  }, {
    x: 82.8,
    y: 48.6,
  }, {
    x: 87.4,
    y: 40.6,
  }, {
    x: 87.4,
    y: 19.6,
  }, {
    x: 87.4,
    y: 3.1,
  }, {
    x: 95.3,
    y: 91.4,
  }, {
    x: 77.4,
    y: 91.4,
  }, {
    x: 87.4,
    y: 62.1,
  }]
  .map((pos, i) => (assign({}, pos, { index: i })))


const Locations = [{
  color: "#fe0000"
}, {
  color: "#00a6d3"
}, {
  color: "#fb7130"
}, {
  color: "#3bc901"
}, {
  color: "#fef200"
}, {
  color: "#c51a20"
}, {
  color: "#fdb813"
}, {
  color: "#ebdebb"
}, {
  color: "#561801"
}, {
  color: "#40fff5"
}, {
  color: "#134199"
}, {
  color: "#ff000a"
}, {
  color: "#b6c3d6"
}, {
  color: "#dd725e"
}, {
  color: "#ffffff"
}, {
  color: "#ff6c7e"
}, {
  color: "#99f7d5"
}]



module.exports = { PinWheels, MapPositions, Locations }
