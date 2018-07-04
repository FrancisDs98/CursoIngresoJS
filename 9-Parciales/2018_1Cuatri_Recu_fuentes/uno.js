
function Mostrar()
{
	var base;
	var altura;
	var perimetro;
	var area;

	base=prompt("Ingrese la base del triangulo equilatero.");
	perimetro=base*3
	altura=prompt("Ahora ingrese la altura del mismo.");
	area=(base*altura)/2;

	alert("La superficie de su triangulo es "+area+" y su perimetro es "+perimetro);
}
