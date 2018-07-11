function Mostrar()
{
//tomo la edad  
var edad;

edad=parseInt(document.getElementById('edad').value);

//edad=parseInt(edad);

if(edad > 17)
{

	alert("Usted es mayor de edad.");
}
else if (edad < 13)
{	
	alert("Usted es niño.");
}
else
{
	alert("Usted es adolescente.");
}

}//FIN DE LA FUNCIÓN