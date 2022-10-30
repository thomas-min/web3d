import "./style.css";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TorusGeometry,
  Mesh,
  MeshStandardMaterial,
  AmbientLight,
  PointLight,
  GridHelper,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new Scene();

const camera = new PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // view frustum
  1000
);

const renderer = new WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

// set up renderer to fill screen
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// add torus mesh to scene
const geometry = new TorusGeometry(10, 3, 16, 100);
const material = new MeshStandardMaterial({ color: 0xff6347 });
const torus = new Mesh(geometry, material);
scene.add(torus);

// add lighting
const pointLight = new PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new AmbientLight(0xffffff);
scene.add(ambientLight);

// add grid
const gridHelper = new GridHelper(200, 50);
scene.add(gridHelper);

// add mouse drag control
const controls = new OrbitControls(camera, renderer.domElement);

// render loop
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();
