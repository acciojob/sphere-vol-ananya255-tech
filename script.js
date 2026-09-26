function volume_sphere(event) {
    //Write your code here
	//(4/3) · π · r3

	event.preventDefault()

	let radius=document.getElementById("radius").value;
	if(isNaN(radius) || radius==="" || Number(radius)<0){
	return NaN
	}

	let volume=(4/3)*Math.PI*radius*radius*radius
	
  volume=volume.toFixed(4)
 document.getElementById("volume").value = volume;

 
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
