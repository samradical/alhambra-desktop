import { cover, contain } from 'intrinsic-scale';
import { StyleSheet, css } from 'aphrodite';
import JsonLoader from './jsonLoader';

let IS_PROD;
if (process.env.NODE_ENV === 'development') {
  IS_PROD = false;
} else {
  IS_PROD = true;
}

const TIME_C = 4000

require('fastclick')(document.body);
var html = require('choo/html')
var log = require('choo-log')
var choo = require('choo')

var app = choo()
  //app.use(log())

//VIEWS
var mapView = require('./views/map')
var mapLocationsView = require('./views/map_locations')
var tourView = require('./views/tour')
var tourOverlayView = require('./views/tour_overlay')
var pinWheelsView = require('./views/pin_wheels')

//APP MODEL
app.model({
  state: {
    locations: require('./locations'),
    timeCounter: TIME_C,
    introAnimation: {
      imageClass: "image--hidden",
      markerClass: "marker--hidden"
    },
    activeLocation: 0,
    loaded: false,
    map: {
      width: 0,
      height: 0
    }
  },
  reducers: {
    resize: function(state, data) {
      const appEl = document.querySelector('.appContent')
      const alhambraApp = document.getElementById('alhambra-app')
      const cwidth = appEl.offsetWidth * .90
      const cheight = appEl.offsetHeight * .96
      let { width, height, x, y } = contain(
        cwidth ,
        cheight,
        1731,
        1300);

      const alhambraAppWidth = width * 0.7;
      const alhambraAppHeight = height * 0.55;
      alhambraApp.style.width = `${alhambraAppWidth}px`
      alhambraApp.style.height = `${alhambraAppHeight}px`
      const ox = document.querySelector('.pinWheelsContainer').offsetWidth
      alhambraApp.style.left = `${(appEl.offsetWidth - alhambraAppWidth) / 2 + ox}px`
      alhambraApp.style.top = `${(window.innerHeight - height) / 2}px`

      //update model state
      return { map: { width: width, alhambraAppWidth, height: height, alhambraAppHeight } }
    },
    loaded: (state, data) => ({ loaded: true }),
    introAnimationUpdate: (state, data) => {
      return {introAnimation: Object.assign({}, state.introAnimation, data)}
    },
    timeCounter: (state, data) => {
      return { timeCounter: data }
    },
    mapMarkerClicked: function(state, data) {
      return {
        timeCounter: TIME_C,
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
      send('loaded', done)
    }
  }
})

console.log(process.env);

function mainView(state, prev, send) {

  const { Locations } = require('./locations');
  const styles = StyleSheet.create({
    bgColor: {
      backgroundColor: Locations[state.activeLocation].color
    }
  });

  return html `
    <div class="app_desktop ${css(styles.bgColor)}">
        <div class="pinWheelsContainer">
            ${pinWheelsView(state, prev, send)}
        </div>
        <div class="appContent">
          <div class="contentContainer"  style="width: ${state.map.width}px; height: ${state.map.height}px; ">
            ${mapView(state, prev, send)}
            ${tourView(state, prev, send)}
            ${tourOverlayView(state, prev, send)}
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
const baseRoute = IS_PROD ? "desktop-tour/" : ""
console.log(baseRoute);
app.router([`/${baseRoute}`, mainView])

var tree = app.start()
document.body.appendChild(tree)
