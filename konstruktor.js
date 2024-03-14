var camera, scene, renderer;

function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 5, 10);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = 1;
    cube.rotation.y = Math.PI / 4;
    scene.add(cube);