/*
ingreso:
maria F 15
jose M 33
Pepe m 81

mostrar:
	cantidad
		1- de mayores de edad = 2
		2- menores de edad = 1
		3- mujeres = 1
		4- cantidad de hombres = 2
	nombre
		5- del mayor edad = pepe
		6- del menor edad = maria
		7- del hombre de menor edad = jose
*/
function mostrar()
{
		//DEFINIR VARIABLES.
		var nombre;
		var sexo;
		var edad;
		var contador;
		var contadorDeMayores;
		var contadorDeMenores;
		var contadorDeHombres;
		var contadorDeMujeres;

		//INICIALIZACION
		contador=0;
		contadorDeMenores=0;
		contadorDeMayores=0;


		//CARGA DE DATOS
	while(contador < 3){
		contador++;
		nombre = prompt("Ingrese nombre");
		sexo = prompt("Ingrese sexo");

		while(sexo != "f" && sexo != "m"){
			sexo = sexo.toLowerCase(sexo);
			sexo = prompt("Error. Ingrese sexo");
		}
		edad=prompt("Ingrese edad");
		while(edad < 0 || edad >100){
			edad = prompt("Error. Ingrese edad");
		}

		//ANALISIS

		if (edad > 18){
			contadorDeMayores++;
		}else{
			contadorDeMenores++;
		}
		if (sexo = "f"){
			contadorDeMujeres++;
		}else{
			contadorDeHombres++;
		}
	}
	//MAS ACCIONES
	//PROMEDIO






	//MOSTRAR
	document.write("<br> La cantidad de mayores es : "+contadorDeMayores);
	document.write("<br> La cantidad de menores es : "+contadorDeMenores);
	document.write("<br> La cantidad de hombres es : "+contadorDeHombres);
	document.write("<br> La cantidad de mujeres es : "+contadorDeMujeres);
}
