class Animator {
  constructor (animations) {
    this.animations = animations
  }

  animationLoop (animations, index) {
    index = index || 0
    if (typeof animations[index] !== 'undefined') {
      setTimeout(() => {
        animations[index].animation()
        this.animationLoop(animations, index + 1)
      }, animations[index].delay)
    }
  }

  start () {
    this.animationLoop(this.animations)
  }
}

export default class Beginning {
  constructor (name, animations) {
    this.name = name
    this.animationRunner = new Animator(animations)
  }

  greet () {
    console.log(`I am alive, Thank You for Executing ${this.name}!`)
  }

  generateTheUniverse () {
    this.animationRunner.start()
  }
}
