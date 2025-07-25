
const container = document.getElementById("brain-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

const loader = new THREE.GLTFLoader();
loader.load('brain_model.glb', function (gltf) {
    const brain = gltf.scene;
    brain.scale.set(5, 5, 5);
    scene.add(brain);
    camera.position.z = 10;
    function animate() {
        requestAnimationFrame(animate);
        brain.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function (error) {
    console.error(error);
});
