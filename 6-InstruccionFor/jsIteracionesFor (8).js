function mostrar()
{
	var numeroIngresado;
	var numerosAnteriores;
	var numeroRecorrido;
	var esPrimo;

	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(rumeroRecorrido=numeroIngresado ; numeroRecorrido > 1 ; numeroRecorrido--)
	{
		esPrimo = 0;
		for(numerosAnteriores = 2; numerosAnteriores < numeroRecorrido ; numerosAnteriores++)
		{
		
			if(numeroRecorrido%numerosAnteriores==0)
			{
				esPrimo = 1;
				break;
			}
		}
		if(esPrimo==0){
		console.log(numeroRecorrido + " Es un numero primo");
		}
	}
	

	/*else{
				console.log(numeroIngresado + " No es un numero primo");
		}*/


}//FIN DE LA FUNCIÓN