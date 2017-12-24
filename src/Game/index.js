class Game {
  pixi = {}
  bunny = {}

  constructor (pixi, bunny) {
    this.pixi = pixi
    this.bunny = bunny
  }

  handleTick (delta) {
    this.bunny.rotation += 0.1 * delta
  }
}

export default Game
