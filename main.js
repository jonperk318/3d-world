import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);



const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x341a00 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);



const skyTexture = new THREE.TextureLoader().load('./src/pink-sky.jpg');
scene.background = skyTexture;



// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.05;
  torus.rotation.y += 0;
  torus.rotation.z += 0;

  // controls.update();

  renderer.render(scene, camera);
}

animate();

/*
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello World</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
