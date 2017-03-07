var html = require('choo/html')
var pinWheelView = require('./pin_wheel')

function PinWheels(state, prev, send) {
  const colModelsEven = state.locations.filter((l, i) => (l.even))
  const colModelsOdd = state.locations.filter((l, i) => (!l.even))

  const wheelsEven = colModelsEven.map(l => (pinWheelView(l, prev, send)))
  const wheelsOdd = colModelsOdd.map(l => (pinWheelView(l, prev, send)))

  return html `
        <div class="pinwheels">
          <div class="pinwheel--column">
            ${wheelsEven}
          </div>
        <div class="pinwheel--column">
          ${wheelsOdd}
        </div>
      </div>
  `
}

module.exports = PinWheels
