function crear(){

	var col = 2 //document.getElementById("cols").value;
	var filas = document.getElementById("rows").value;
	var tabla="<table border=\"1\">";

tabla+="<tr>";
tabla+="<td>"+"<center>"+"<b>"+"NOMBRE DE LA MATERIA"+"</b>"+"</center>"+"</td>";
tabla+="<td>"+"<center>"+"<b>"+"COSTO DE LA MATERIA"+"</b>"+"</center>"+"</td>";
tabla+="</tr>";

for(i=0;i<filas;i++){
tabla+="<tr>";
for(j=0;j<col;j++){ 
tabla+="<td>"+"<input id=\""+i+"-"+j+"\" type=\"text\" size=\"50\">"+ "</td>";
}
tabla+="</tr>";
}
tabla+="</table>";
document.getElementById("resultado").innerHTML=tabla;

}
function crear2(){

document.getElementById("p1").innerHTML=""
document.getElementById("resultado").innerHTML=""

}

function crear3(){

var nombreE = document.getElementById("cols").value;
var Nmaterias = document.getElementById("rows").value;
let datos=[];

let variable=document.getElementsByTagName("td");
for(i=4;i<(4+Nmaterias*2);i++){
datos.push(variable[i].children[0].value);
console.log(variable[i].children[0].value);
}

//var variable=document.getElementsByTagName("td")[0].innerHTML;
console.log(datos)

var Total=0;
var Fijos=28000;
var Vmaterias='';

for(i=1;i<(Nmaterias*2);i=i+2){
Total+=parseFloat(datos[i]);
}
for(i=0;i<(Nmaterias*2);i=i+2){
Vmaterias+=datos[i];
if((i+2)<(Nmaterias*2)){Vmaterias+=', ';}
}

	var Ftotal=Fijos+(Total-Total*0.2);
	//alert( nombreE +" el valor total de las "+ Nmaterias +" materias que matriculó con el descuento del 20% más los costos fijos es de $"+ Ftotal);

 	p1=document.getElementById("p1").innerHTML=""
 	var newtext = document.createTextNode(nombreE +" el valor total de las "+ Nmaterias +" materias que matriculó con el descuento del 20% más los costos fijos es de $"+ Ftotal+", las materias a ver son: "+Vmaterias),
     	p1 = document.getElementById("p1");

  	p1.appendChild(newtext);

}