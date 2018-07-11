function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

edad=parseInt(edad);

if(edad >=13 && edad<=17)
{

	alert("Usted es adolescente");
}

/*if(  ! (edad < 13 || edad > 17) )
{
 

 alert("Usted es adolescente");
}
*/

/* 
       OPERADORES LOGICOS

   or || (Pipe) <--- simbolo (se hace con el alt Gr + 1)

   and && (Ampersand) <----- simbolo (se hace con shift + 6)

   not ! (signo de exclamacíon) <----- simbolo (se hace con shift + 1)
*/

}//FIN DE LA FUNCIÓN