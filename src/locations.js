const LOCATIONS = 17

const arr = new Array(LOCATIONS).fill(0)

const Locations = arr.map((l, i) => {
  return {
    id: i,
    even: i % 2 === 0,
    rotation: (i % 2 === 0) ? 15 : 25
  }
})


module.exports = Locations