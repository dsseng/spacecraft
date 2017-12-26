import Astronaut from './Astronaut'

class Game {
  constructor (a) {
    this.a = a
    this.astronaut = new Astronaut(this.a.pixi)
  }

  init () {
    this.astronaut.init()

    this.resize(this.a.width, this.a.height)
  }

  resize (width, height) {
    this.a.pixi.stage.position.x = this.a.pixi.renderer.width / 2
    this.a.pixi.stage.position.y = this.a.pixi.renderer.height / 2
  }

  tick (delta) {
    this.astronaut.tick(delta)
  }
}

export default { Game: Game }
