class Sound {
  constructor() {
    setInterval(() => {
      if (window.ALHAMBRA_API && this.coord) {
        window.ALHAMBRA_API.changeLocation(this.coord)
      }
    }, 1000)

  }

  change(url) {
    if (this.sound) {
      this.sound.stop()
      this.sound.destroy()
    }
    this.sound = window.sono.createSound({
      src: [
        url,
      ],
      volume: 1,
      loop: true,
    });
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
  }


}

export default new Sound()
