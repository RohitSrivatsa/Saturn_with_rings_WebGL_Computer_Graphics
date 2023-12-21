
var clock = new THREE.Clock();

    shadowType = 0;
    time = 0;
    speed = 0;
    n = 1000000; 

    renderer = new THREE.WebGLRenderer({ alpha: true });
    	renderer.setSize( window.innerWidth, window.innerHeight );
    	renderer.setClearColor(0x222222, 0);
    scene = new THREE.Scene();

    ratio = window.innerWidth/window.innerHeight;
    near = 1;
    far = 20000;
    camera = new THREE.PerspectiveCamera( 75, ratio, near, far );
        camera.position.x = -24;
        camera.position.y = 111;
        camera.position.z = 297;

    textureLoader = new THREE.TextureLoader();
    controls = new THREE.OrbitControls( camera, renderer.domElement );

function render() {
	stats.begin();
	controls.update();
    updateCameraInfo();
	renderer.render(scene, camera);
	requestAnimationFrame(render);

    saturn.rotation.y -= speed ;

    time += 0.00001;

    saturnUniforms.time.value += 0.3*speed;
    titanoUniforms.time.value += 0.8*speed;
    internalRingUniforms.time.value += 0.55*speed;
    externalRingUniforms.time.value += 0.55*speed;

    internalRingUniforms.shadowType.value = shadowType;
    externalRingUniforms.shadowType.value = shadowType;
    
    stats.end();

} 

