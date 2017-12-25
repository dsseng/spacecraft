import SpriteSheetAnimation from './AnimationLoader'
import keyboard from './keyboard'
import AstronautAnimationJSON from '../assets/textrures/Astronaut/AstronautSpritesheet.json'

class Game {
  constructor (a) {
    this.a = a
  }

  init () {
    // create a new Sprite from an image path
    this.a.sprite = new SpriteSheetAnimation(AstronautAnimationJSON)
    // center the sprite's anchor point
    this.a.sprite.anchor.set(0.5)

    // move the sprite to the center of the screen
    this.a.sprite.x = this.a.pixi.renderer.width / 2
    this.a.sprite.y = this.a.pixi.renderer.height / 2

    this.a.pixi.stage.addChild(this.a.sprite)

    this.a.vx = 0
    this.a.vy = 0

    let left = keyboard(37)
    let up = keyboard(38)
    let right = keyboard(39)
    let down = keyboard(40)

    left.press = () => {
      this.a.vx = -5
      this.a.vy = 0
    }

    left.release = () => {
      if (!right.isDown && this.a.vy === 0) {
        this.a.vx = 0
      }
    }

    up.press = () => {
      this.a.vy = -5
      this.a.vx = 0
    }
    up.release = () => {
      if (!down.isDown && this.a.vx === 0) {
        this.a.vy = 0
      }
    }

    right.press = () => {
      this.a.vx = 5
      this.a.vy = 0
    }
    right.release = () => {
      if (!left.isDown && this.a.vy === 0) {
        this.a.vx = 0
      }
    }

    down.press = () => {
      this.a.vy = 5
      this.a.vx = 0
    }
    down.release = () => {
      if (!up.isDown && this.a.vx === 0) {
        this.a.vy = 0
      }
    }
  }

  tick (delta) {
    if (this.a.vx >= 1 || this.a.vy >= 1 || this.a.vx <= -1 || this.a.vy <= -1) {
      this.a.sprite.play('walk')
    } else {
      this.a.sprite.stop()
    }

    this.a.sprite.x += this.a.vx * delta
    this.a.sprite.y += this.a.vy * delta
  }
}

export default { Game: Game }
