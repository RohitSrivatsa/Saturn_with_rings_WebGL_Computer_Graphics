var speedController = document.getElementById("Select_Speed");
	bgController = document.getElementById("Select_background");
	particlesController = document.getElementById("Select_Particles");
	planeIsOn = false;
	axisAreOn = false;
	background = 1;

function init(){
		document.getElementById('Information_of_particles').textContent ="Particles per ring: "+n;
		updateCameraInfo();
		rotation_pace();
		
}

function updateCameraInfo(){
	document.getElementById('Position_of_Camera').textContent = "Camera Position: ("+Math.round(camera.position.x)+", "+Math.round(camera.position.y)+", "+Math.round(camera.position.z)+")";
}

function rotation_pace(){
	speed = (Select_Speed.value != 0)?Math.exp(-(100-Select_Speed.value)/10):0;
}

function plane_type(){
	if(planeIsOn){
		scene.remove(plane);
		planeIsOn = false;
	}
	else{
		scene.add(plane);
		planeIsOn = true;
	}
}








function Axis_type(){
	if(axisAreOn){
		scene.remove(axisX);
		scene.remove(axisY);
		scene.remove(axisZ);
		axisAreOn = false;
	}
	else{
		scene.add(axisX);
		scene.add(axisY);
		scene.add(axisZ);
		axisAreOn = true;
	}
}

stats = new Stats();

document.getElementById('Division_Sats').appendChild( stats.dom ).setAttribute('id', 'DOM_Stats');