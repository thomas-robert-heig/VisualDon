import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";

/********************************
 * Init
 ********************************/

/* Scene
 ********************************/
const scene = new Scene();
scene.background = new Color(0xcccccc);

/* Camera
 ********************************/
const camera = new PerspectiveCamera(
	30,
	window.innerWidth / window.innerHeight,
	1,
	1500
);

camera.position.set(0, 400, 700);

/* Render
 ********************************/
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const domElement = document.createElement("div");
document.body.appendChild(domElement);

renderer.render(scene, camera);
