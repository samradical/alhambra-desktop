var html = require('choo/html')
function Tour (state, prev, send) {
  return html`
    <iframe class="tour--frame" src="https://rad.wtf/alhambra-web/" width="667" height="375">
    </iframe>
  `
}

module.exports = Tour