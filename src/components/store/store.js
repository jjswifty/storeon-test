import { createStoreon } from 'storeon'
import { clicker } from './clicker.module'

const store = createStoreon([clicker])

window.store = store

export default store