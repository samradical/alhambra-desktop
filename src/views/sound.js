class Sound {
  constructor() {
    setInterval(() => {
      if (window.ALHAMBRA_API && this.coord) {
        window.ALHAMBRA_API.changeLocation(this.coord)
      }
    }, 2500)
  }

  change(url, cb) {
    if (this.sound) {
      this.sound.stop()
      this.sound.destroy()
    }
    this.sound = window.sono.createSound({
      src: [url],
      volume: 1,
      loop: true,
    })
    this.sound.on("loaded", e => {
      cb()
      /*if (window.ALHAMBRA_API) {
        window.ALHAMBRA_API.pause()
      }*/
      setTimeout(() => {
        if (window.ALHAMBRA_API) {
          //window.ALHAMBRA_API.resume()
          this._paused = false
        }
      }, 4000)
    })

    this.sound.play()
  }

  stop() {
    if (this.sound) {
      this.sound.stop()
      this.sound.destroy()
    }
  }

  updateMap(coord) {
    this.coord = coord
    this._paused = true
    if (window.ALHAMBRA_API) {
      //window.ALHAMBRA_API.newLocation()
      //console.log("window.ALHAMBRA_API.pause()",window.ALHAMBRA_API.pause());
        window.ALHAMBRA_API.pause()
      setTimeout(() => {
        window.ALHAMBRA_API.resume()
      }, 4000)
    }
  }
}

export default new Sound()
