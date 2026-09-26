function volume_sphere() {
    //Write your code here
	//(4/3) · π · r3

	let radius=document.getElementById("radius").value;
	if(isNaN(radius) || radius===""){
	return NaN
	}

	let volume=(4/3)*Math.PI*radius*radius*radius
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
