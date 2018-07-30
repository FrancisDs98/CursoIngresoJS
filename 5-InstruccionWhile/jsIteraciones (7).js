function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta != "n"){
		contador++;
		numero=prompt("ingrese numero #"+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta = prompt ("Desea seguir ingresando numeros?: (si/no)")
	}

promedio=acumulador/contador;

document.getElementById('suma').value="La suma es "+acumulador;
document.getElementById('promedio').value="El promedio es: "+promedio;

}//FIN DE LA FUNCIÓN


//contador = valor constante
//acumulador = valor variable