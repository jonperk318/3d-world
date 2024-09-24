import './style.css'
import * as THREE from 'three';

const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const skyTexture = new THREE.TextureLoader().load('./src/pink-sky.jpg');
scene.background = skyTexture;

/*
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello World</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
