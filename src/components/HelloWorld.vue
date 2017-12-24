<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>-->
    <resize-observer @notify="resize" />
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pixi: {},
      bunny: {},
      width: window.innerWidth - 20,
      height: window.innerHeight - 20
    }
  },
  methods: {
    resize () {
      this.width = window.innerWidth - 20
      this.height = window.innerHeight - 20
      this.pixi.renderer.resize(this.width, this.height)
      console.log(this.pixi.stage)
      this.bunny.x = this.pixi.renderer.width / 2
      this.bunny.y = this.pixi.renderer.height / 2
    }
  },
  mounted () {
    this.pixi = new PIXI.Application(this.width, this.height, { backgroundColor: 0x1099bb })
    this.$el.appendChild(this.pixi.view)

    // create a new Sprite from an image path
    this.bunny = PIXI.Sprite.fromImage('Baby-Bunny.jpg')

    // center the sprite's anchor point
    this.bunny.anchor.set(0.5)

    // move the sprite to the center of the screen
    this.bunny.x = this.pixi.renderer.width / 2
    this.bunny.y = this.pixi.renderer.height / 2

    this.pixi.stage.addChild(this.bunny)

    // Listen for animate update
    this.pixi.ticker.add(delta => {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent tranformation
      this.bunny.rotation += 0.1 * delta
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
