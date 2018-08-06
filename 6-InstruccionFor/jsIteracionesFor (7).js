function mostrar()
{
	var numeroIngresado;
	var numerosAnteriores;

	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numerosAnteriores=numeroIngresado-1 ; numerosAnteriores>1; numerosAnteriores--)
	{
		
		if(numeroIngresado%numerosAnteriores==0)
		{
			console.log(numerosAnteriores);
		}
	}



}//FIN DE LA FUNCIÓN