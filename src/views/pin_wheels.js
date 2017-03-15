import { assign } from 'lodash';
var html = require('choo/html')
var pinWheelView = require('./pin_wheel')

function PinWheels(state, prev, send) {
  const { PinWheels } = state.locations;
  const colModelsEven = PinWheels.filter((l, i) => (l.even))
  const colModelsOdd = PinWheels.filter((l, i) => (!l.even))

  const wheelsEven = colModelsEven.map(l => (pinWheelView(assign({}, l, { activeLocation: state.activeLocation }), prev, send)))
  const wheelsOdd = colModelsOdd.map(l => (pinWheelView(assign({}, l, { activeLocation: state.activeLocation }), prev, send)))

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
