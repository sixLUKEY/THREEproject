import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/Orbitcontrols.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// const loader = new GLTFLoader();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xe7671});
const cube = new THREE.Mesh(geometry, material );
const controls = new OrbitControls( camera, renderer.domElement );
scene.add( cube );

const planeGeometry = new THREE.PlaneGeometry( 30, 30 );
const planeMaterial = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -0.5 * Math.PI;
scene.add( plane );

const gridHelper = new THREE.GridHelper( 30 );
scene.add( gridHelper );

camera.position.set( -10 , 30 , 30 );
controls.update();

function animate(){
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();

// const mixer = new THREE.AnimationMixer( mesh )
// const clips = mesh.animations;

// function upate () {
//     mixer.update( deltaSeconds);
// }

// const clip =THREE.AnimationClip.findByName( clips, 'dance' );
// const action = mixer.clipAction( clip );
// action.play();

// clips.forEach( function ( clip ) {
//     mixer.clipAction( clip ).play();
// })