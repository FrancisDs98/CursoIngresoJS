function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

edad=parseInt(edad);

if(!(edad >=13 && edad<=17))
{
	alert("Usted no es adolescente.");
}

/*
if(edad >=13 && edad<=17)
{
	 NO DEJAR CODIGO VACIO
}
else
{
	alert("Usted no es adolescente.")               HORRIBLE, ESTA MAL HECHO 
}
*/
}//FIN DE LA FUNCIÓN