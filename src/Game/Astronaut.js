import SpriteSheetAnimation from './AnimationLoader'
import keyboard from './keyboard'
import AstronautAnimationJSON from '../assets/textrures/Astronaut/AstronautSpritesheet.json'

class Astronaut {
  constructor (pixi) {
    this.pixi = pixi

    // create a new Animation
    this.sprite = new SpriteSheetAnimation(AstronautAnimationJSON)

    // create keyboard handlers to control astronaut
    this.left = keyboard(37)
    this.up = keyboard(38)
    this.right = keyboard(39)
    this.down = keyboard(40)
  }

  init () {
    // center the sprite's anchor point
    this.sprite.anchor.set(0.5)

    // move the sprite to the center of the screen
    this.sprite.x = this.pixi.renderer.width / 2
    this.sprite.y = this.pixi.renderer.height / 2

    this.pixi.stage.addChild(this.sprite)

    this.vx = 0
    this.vy = 0

    this.left.press = () => {
      this.vx = -5
      this.vy = 0
    }

    this.left.release = () => {
      if (!this.right.isDown && this.vy === 0) {
        this.vx = 0
      }
    }

    this.up.press = () => {
      this.vy = -5
      this.vx = 0
    }
    this.up.release = () => {
      if (!this.down.isDown && this.vx === 0) {
        this.vy = 0
      }
    }

    this.right.press = () => {
      this.vx = 5
      this.vy = 0
    }
    this.right.release = () => {
      if (!this.left.isDown && this.vy === 0) {
        this.vx = 0
      }
    }

    this.down.press = () => {
      this.vy = 5
      this.vx = 0
    }
    this.down.release = () => {
      if (!this.up.isDown && this.vx === 0) {
        this.vy = 0
      }
    }
  }

  tick (delta) {
    if (this.vx >= 1 || this.vx <= -1) {
      this.sprite.play('walk')
      if (this.vx < 0) {
        this.sprite.scale.x = -1
      } else {
        this.sprite.scale.x = 1
      }
    } else if (this.vx === 0 && this.vy === 0) {
      this.sprite.play('idle')
    } else if (this.vy >= 1 || this.vy <= -1) {
      this.sprite.play('jump')
      if (this.vx < 0) {
        this.sprite.scale.x = 1
      } else {
        this.sprite.scale.x = -1
      }
    }

    this.sprite.x += this.vx * delta
    this.sprite.y += this.vy * delta

    // this.pixi.stage.pivot.x = this.sprite.x
    // this.pixi.stage.pivot.y = this.sprite.y
  }
}

export default Astronaut
