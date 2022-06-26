function calcular_Mm(){
	
	stado=true
    	var numero1 = document.getElementById("numero1").value;
	var numero2 = document.getElementById("numero2").value;
	var numero3 = document.getElementById("numero3").value;
	var numero4 = document.getElementById("numero4").value;
	
	let entrada = [numero1, numero2, numero3, numero4]
	console.log(entrada);

	for (var i = 0; i < 4; i++) { //for 1
	console.log("primer for");
	var numero=entrada[i]
	if (numero == '') {
  	alert("hay celdas vacias");
	stado=false
	} else {
  	console.log("No es null");
	}
	
	for (var j = i+1; j < 4; j++) { //for 2
	console.log("segundo for");

   	if(numero==entrada[j]){
		
		alert ("los numeros son iguales entre si");
		stado=false
		break;
		}// if

	} //fin for 1
	} //fin for 2

	var mayor= entrada[0];
	var menor= entrada[0];
	
	if(stado==true){

	for (var i = 0; i < 4; i++) {

	if(entrada[i]>mayor)	{mayor= entrada[i]}
	else if(entrada[i]<menor) {menor= entrada[i]}
	}

	alert ("el numero mayor es: " + mayor + " y el menor es: " + menor);	

	}

	else{ alert ("ingrese 4 numeros diferentes entre si y/\u00F3 no deje celdas vacia")	}

}

