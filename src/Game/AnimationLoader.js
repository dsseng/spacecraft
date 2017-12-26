import * as PIXI from 'pixi.js'

class SpriteSheetAnimation extends PIXI.Sprite {
  speedModes = []
  frames = []
  animationSpeed = 0.01
  frame = 0

  constructor (json) {
    super()
    let info = json.animations
    for (let x in info) { // animations
      if (!this.currentAnimation) {
        this.currentAnimation = x
      }
      this.speedModes[x] = info[x].speed
      this.frames[x] = []
      for (let y in info[x].frames) { // frames
        if (!this.currentFrame) {
          this.currentFrame = y
        }
        this.frames[x].push(new PIXI.Texture(PIXI.Texture.fromImage(json.file), new PIXI.Rectangle(info[x].frames[y].x, info[x].frames[y].y, info[x].frames[y].width, info[x].frames[y].height)))
      }
    }

    this.texture = this.frames[this.currentAnimation][this.currentFrame]
  }

  update () {
    if (this.isPlaying) {
      this.frame += this.animationSpeed
      this.currentFrame = Math.floor(this.frame)
      if (this.frame >= this.frames[this.currentAnimation].length) {
        this.frame = 0
        this.currentFrame = 0
      }

      this.texture = this.frames[this.currentAnimation][this.currentFrame]
    }
  }

  play (name, speed) {
    if (!this.isPlaying) {
      if (speed) {
        this.animationSpeed = speed
      } else {
        this.animationSpeed = this.speedModes[name]
      }
      this.isPlaying = true
      this.currentAnimation = name
      PIXI.ticker.shared.add(this.update, this)
    } else {
      this.currentAnimation = name
    }
  }

  stop () {
    if (this.isPlaying) {
      this.isPlaying = false
      PIXI.ticker.shared.remove(this.update, this)
    }
  }

  resume () {
    if (!this.isPlaying) {
      this.isPlaying = true
      PIXI.ticker.shared.add(this.update, this)
    }
  }
}

export default SpriteSheetAnimation
