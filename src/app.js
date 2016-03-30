import $ from 'jquery'
import Beginning from './beginning'

const animations = [
  {
    delay: 2000,
    animation () {
      $('#laserCats').animate({
        top: 50,
        right: '25%'
      })
    }
  },
  {
    delay: 200,
    animation () {
      $('#wallCat').animate({
        top: 50,
        left: '25%'
      })
    }
  },
  {
    delay: 200,
    animation () {
      $('#trex').animate({
        bottom: 40
      })
    }
  }
]

const beginning = new Beginning('Matthew', animations)
beginning.greet()
beginning.generateTheUniverse()
