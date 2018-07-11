function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if(edad==15)
{

	alert("Niña bonita");

}

/*

if(edad==15); <---------- si pongo el punto y coma no funciona lo que sigue.
{

	alert("Niña bonita");

}

*/


}//FIN DE LA FUNCIÓN