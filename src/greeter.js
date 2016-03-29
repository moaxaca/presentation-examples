import $ from 'jquery'

function * _generate () {
  yield 'blue'
  yield 'black'
  yield 'red'
  yield 'white'
}

export default class Greeter {
  constructor (name) {
    this.name = name
    this.greet()
    this.gen = _generate()
  }

  greet () {
    console.log(`I am alive, Thank You for Executing ${this.name}!`)
  }

  generateTheUniverse (ele) {
    const interval = setInterval(() => {
      let color = this.gen.next().value

      if (!!color) {
        $(ele).css({
          background: color
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)
  }
}
