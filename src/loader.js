class Loader {
  constructor() {
    this.bodyMovinLoaded = false
    this.coverLoaded = false
    this.sequenceLoaded = false
    setTimeout(() => {
      window.LOADER_API = {
        onBodymovinLoaded: () => {
          console.log(
            "------------------------------>>>>>>>>>>>>>>>>>>>"
          )
          console.log("0onBodymovinLoaded")
          console.log(
            "------------------------------>>>>>>>>>>>>>>>>>>>"
          )
          this.bodyMovinLoaded = true
          this.isLoaded()
        },
        onCoverLoaded: () => {
          console.log(
            "------------------------------>>>>>>>>>>>>>>>>>>>"
          )
          console.log("onCoverLoaded")
          console.log(
            "------------------------------>>>>>>>>>>>>>>>>>>>"
          )
          this.coverLoaded = true
          this.isLoaded()
        },

        onSequenceLoaded: () => {
          console.log(
            "------------------------------>>>>>>>>>>>>>>>>>>>"
          )
          console.log("onSequenceLoaded")
          console.log(
            "------------------------------>>>>>>>>>>>>>>>>>>>"
          )
          this.sequenceLoaded = true
          this.isLoaded()
        },
      }
    }, 2000)
  }

  newLocation() {
    this.bodyMovinLoaded = false
    this.coverLoaded = false
    this.sequenceLoaded = false
    this.send("locationLoaded", false)
  }

  isLoaded() {
    if (
      this.bodyMovinLoaded &&
      this.coverLoaded &&
      this.sequenceLoaded
    ) {
      this.send("locationLoaded", true)
    }
  }

  setSend(send) {
    this.send = send
  }
}

export default new Loader()
