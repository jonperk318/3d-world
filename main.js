import './style.css'
import { setupCounter } from './counter.js'
import * as THREE from 'three';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello World</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
