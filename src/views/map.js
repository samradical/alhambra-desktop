var html = require("choo/html")
function Map(state, prev, send) {
  const { activeLocation } = state

  let name = ""
  switch (activeLocation) {
    case 0:
      name = "one"
      break
    case 1:
      name = "two"
      break
    case 2:
      name = "three"
      break
    case 3:
      name = "four"
      break
    case 4:
      name = "five"
      break

    case 5:
      name = "six"
      break

    case 6:
      name = "seven"
      break

    case 7:
      name = "eight"
      break

    case 8:
      name = "nine"
      break

    case 9:
      name = "ten"
      break

    case 10:
      name = "eleven"
      break

    case 11:
      name = "twelve"
      break
    case 12:
      name = "thirteen"
      break
    case 13:
      name = "fourteen"
      break
    case 14:
      name = "fifteen"
      break
    case 15:
      name = "sixteen"
      break
    case 16:
      name = "seventeen"
      break
  }
  return html`
        <span class="map--image ${name}"></span>
  `
}

module.exports = Map
