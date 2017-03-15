import raf from 'raf-loop';
class Animation{
  constructor(){
    this.loop = raf(()=>{
      this.rotation += 0.1;
    })
    this.loop.start()
  }

  get rotation(){
    return this._rotation || 0
  }

  set rotation(r){
    this._rotation = r
  }
}

module.exports = new Animation();