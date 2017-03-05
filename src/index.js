import { cover, contain } from 'intrinsic-scale';
require('fastclick')(document.body);
var html = require('choo/html')
var log = require('choo-log')
var choo = require('choo')

var app = choo()
app.use(log())

//VIEWS
var mapView = require('./views/map')
var tourView = require('./views/tour')

//APP MODEL
app.model({
  state: {
    map: {
      width: 0,
      height: 0
    }
  },
  reducers: {
    resize: function (state, data) {
      const appEl = document.querySelector('.appContent')
      let { width, height, x, y } = contain(appEl.offsetWidth, appEl.offsetHeight * .75, 1731, 1300);
      //update model state
      return { map: { width: width, height: height } }
    }
  },
  effects: {
  },
  subscriptions: {
    'called-once-when-the-app-loads': function(send, done) {
      window.addEventListener('resize', ()=>(send('resize', done)), false)
      //calls reducer resize
      send('resize', done)
    }
  }
})

function mainView(state, prev, send) {
  return html `
    <div class="app">
        <div class="pinWheels">
        </div>
        <div class="appContent">
          <div class="contentContainer"  style="width: ${state.map.width}px; height: ${state.map.height}px; ">
            ${mapView(state, prev, send)}
            ${tourView(state, prev, send)}
          </div>
        </div>
    </div>
  `
}

app.router(['/', mainView])

var tree = app.start()
document.body.appendChild(tree)
