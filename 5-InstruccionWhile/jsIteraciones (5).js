function mostrar()
{

	var sexo = prompt("ingrese f ó m .");


	sexo = sexo.toLowerCase(sexo);

	while(sexo!='f' && sexo!='m'){

		sexo = prompt("Dato invalido. Ingrese f o m.");
		sexo = sexo.toLowerCase(sexo);
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN