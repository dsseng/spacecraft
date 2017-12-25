// import * as PIXI from 'pixi.js'
import SpriteSheetAnimation from './AnimationLoader'
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
    this.a.sprite.play('walk')

    this.a.pixi.stage.addChild(this.a.sprite)

    /* this.a.keys = []
    for (let i = 0; i < 223; i++) {
      this.a.keys[i] = false
    }
    this.a.$el.addEventListener('keydown', event => {
      this.a.keys[event.keyCode] = true
    })
    this.a.$el.addEventListener('keyup', event => {
      this.a.keys[event.keyCode] = false
    }) */
  }

  tick (delta) {
    // this.a.sprite.rotation += 0.1 * delta
  }
}

export default { Game: Game, SpriteSheetAnimation: SpriteSheetAnimation }
