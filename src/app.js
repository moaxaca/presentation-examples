import $ from 'jquery'
import Greeter from './greeter'

const greeter = new Greeter('Matthew')
greeter.generateTheUniverse($('body'))
