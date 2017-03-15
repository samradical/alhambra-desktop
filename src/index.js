import { cover, contain } from 'intrinsic-scale';

let IS_PROD;
if (process.env.NODE_ENV === 'development') {
  IS_PROD = false;
} else {
  IS_PROD = true;
}

require('fastclick')(document.body);
var html = require('choo/html')
var log = require('choo-log')
var choo = require('choo')

var app = choo()
app.use(log())

//VIEWS
var mapView = require('./views/map')
var mapLocationsView = require('./views/map_locations')
var tourView = require('./views/tour')
var pinWheelsView = require('./views/pin_wheels')

//APP MODEL
app.model({
  state: {
    locations: require('./locations'),
    activeLocation: 0,
    map: {
      width: 0,
      height: 0
    }
  },
  reducers: {
    resize: function(state, data) {
      const appEl = document.querySelector('.appContent')
      let { width, height, x, y } = contain(appEl.offsetWidth, appEl.offsetHeight * .75, 1731, 1300);
      //update model state
      return { map: { width: width, height: height } }
    },
    mapMarkerClicked: function(state, data) {
      return {
        activeLocation: data.index
      }
    }
  },
  effects: {},
  subscriptions: {
    'called-once-when-the-app-loads': function(send, done) {
      window.addEventListener('resize', () => (send('resize', done)), false)
        //calls reducer resize
      send('resize', done)
    }
  }
})

console.log(process.env);

function mainView(state, prev, send) {
  return html `
    <div class="app">
        <div class="pinWheelsContainer">
            ${pinWheelsView(state, prev, send)}
        </div>
        <div class="appContent">
          <div class="contentContainer"  style="width: ${state.map.width}px; height: ${state.map.height}px; ">
            ${mapView(state, prev, send)}
            ${tourView(state, prev, send)}
            ${mapLocationsView(state, prev, send)}
          </div>
        </div>
    </div>
  `
}


/*app.router({ default: '/alhambra-desktop' }, [
  [ '/alhambra-desktop', require('./views/empty') ],
])

*/
const baseRoute = IS_PROD ? "alhambra-desktop/" : ""
console.log(baseRoute);
app.router([`/${baseRoute}`, mainView])

var tree = app.start()
document.body.appendChild(tree)
