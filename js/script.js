var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var contador5 = 0;
var contador6 = 0;
var contador7 = 0;
var contador8 = 0;
var contador9 = 0;
var contador11 = -1;
var mayus = false;

$(document).ready(function() {

	$("#boton1").click(function() {
		var contenido = $("#pantalla").text().substring(0, ($("#pantalla").text().length - 1));
		$("#pantalla").text(contenido);
	});

	$("#boton2").click(function() {
		if (contador2 < 3) {
			contador2++;
		} else {
			contador2 = 1;
		}
		var letra = $(this).text().charAt(contador2);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador2 = 0;
		},1000);
	});

	$("#boton3").click(function() {
		if (contador3 < 3) {
			contador3++;
		} else {
			contador3 = 1;
		}
		var letra = $(this).text().charAt(contador3);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador3 = 0;
		},1000);
	});

	$("#boton4").click(function() {
		if (contador4 < 3) {
			contador4++;
		} else {
			contador4 = 1;
		}
		var letra = $(this).text().charAt(contador4);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador4 = 0;
		},1000);
	});

	$("#boton5").click(function() {
		if (contador5 < 3) {
			contador5++;
		} else {
			contador5 = 1;
		}
		var letra = $(this).text().charAt(contador5);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador5 = 0;
		},1000);
	});

	$("#boton6").click(function() {
		if (contador6 < 4) {
			contador6++;
		} else {
			contador6 = 1;
		}
		var letra = $(this).text().charAt(contador6);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador6 = 0;
		},1000);
	});

	$("#boton7").click(function() {
		if (contador7 < 4) {
			contador7++;
		} else {
			contador7 = 1;
		}
		var letra = $(this).text().charAt(contador7);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador7 = 0;
		},1000);
	});

	$("#boton8").click(function() {
		if (contador8 < 3) {
			contador8++;
		} else {
			contador8 = 1;
		}
		var letra = $(this).text().charAt(contador8);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador8 = 0;
		},1000);
	});

	$("#boton9").click(function() {
		if (contador8 < 4) {
			contador8++;
		} else {
			contador8 = 1;
		}
		var letra = $(this).text().charAt(contador8);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador8 = 0;
		},1000);
	});

	$("#boton11").click(function() {
		if (contador11 < 2) {
			contador11++;
		} else {
			contador11 = 0;
		}
		var letra = $(this).text().charAt(contador11);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador11 = -1;
		},1000);
	});

	$("#boton0").click(function() {
		var contenido = $("#pantalla").text();
		$("#pantalla").text(contenido + " ");
	});

	$("#boton12").click(function() {
		if (mayus) {
			$("#boton2").html("<h3>2abc</h3>");
			$("#boton3").html("<h3>3def</h3>");
			$("#boton4").html("<h3>4ghi</h3>");
			$("#boton5").html("<h3>5jkl</h3>");
			$("#boton6").html("<h3>6mnño</h3>");
			$("#boton7").html("<h3>7pqrs</h3>");
			$("#boton8").html("<h3>8tuv</h3>");
			$("#boton9").html("<h3>9wxyz</h3>");
			mayus = false;
		} else {
			$("#boton2").html("<h3>2ABC</h3>");
			$("#boton3").html("<h3>3DEF</h3>");
			$("#boton4").html("<h3>4GHI</h3>");
			$("#boton5").html("<h3>5JKL</h3>");
			$("#boton6").html("<h3>6MNÑO</h3>");
			$("#boton7").html("<h3>7PQRS</h3>");
			$("#boton8").html("<h3>8TUV</h3>");
			$("#boton9").html("<h3>9WXYZ</h3>");
			mayus = true;
		}
		
		/**
		if (contador12 < 1) {
			contador12++;
		} else {
			contador12 = 1;
		}
		var letra = $(this).text().charAt(contador12);
		var contenido = $("#pantalla").text();
		setTimeout(function () {
			$("#pantalla").text(contenido + letra);
			contador12 = 0;
		},1000);
		*/
	});
});

//Cuarto intento
/**
letra = $(this).text().charAt(contador);
		contenido = $("#pantalla").text();
		if (espera) {
			//Como si está en tiempo de espera, se reemplaza  caracter
			contenido = $("#pantalla").text();
			//$("#pantalla").text().replace($("#pantalla").text().charAt($("#pantalla").text().length - 1), "");
			//$("#pantalla").text(contenido + letra);
			if (contador < 3) {
				contador++;
			} else {
				contador = 0;
			}
			
			//Esta variable avisa que se inició el tiempo de espera
		} else {
			//Como no está en tiempo de espera, se agrega nuevo caracter
			//$("#pantalla").text().replace($("#pantalla").text().charAt($("#pantalla").text().length - 1), "");
			//$("#pantalla").text(contenido + letra);
			espera = true;
			//Esta variable avisa que se inició el tiempo de espera
			//En este momento es cuando se puede recibir un nuevo click
			setTimeout(function() {
				//Se cumple el tiempo de espera, así que se deja marcado el caracter
				//contenido = $("#pantalla").text().substring(0, ($("#pantalla").text().lenght - 1));
				$("#pantalla").text(contenido + letra);
				espera = false;
				contador = 0;
				//Esta variable avisa que se terminó el tiempo de espera
			}, 1000);
		}
*/

//Tercer intento
/**
if (espera) {
			//Como si está en tiempo de espera, se reemplaza  caracter
			letra = "<span style='color:black; background-color:white'>" + $(this).text().charAt(contador) + "</span>";
			contenido = $("#pantalla").text().substring(0, ($("#pantalla").text().lenght - 1));
			//$("#pantalla").text().replace($("#pantalla").text().charAt($("#pantalla").text().length - 1), "");
			console.log("Substring: " + contenido);
			$("#pantalla").html(contenido + letra);
			console.log($("#pantalla").text());
			if (contador < 3) {
				contador++;
			} else {
				contador = 0;
			}
			
			//Esta variable avisa que se inició el tiempo de espera
		} else {
			//Como no está en tiempo de espera, se agrega nuevo caracter
			letra = "<span style='color:black; background-color:white'>" + $(this).text().charAt(contador) + "</span>";
			contenido = $("#pantalla").text();
			//$("#pantalla").text().replace($("#pantalla").text().charAt($("#pantalla").text().length - 1), "");
			console.log("Substring: " + contenido);
			$("#pantalla").html(contenido + letra);
			console.log($("#pantalla").text());
			espera = true;
			//Esta variable avisa que se inició el tiempo de espera
			//En este momento es cuando se puede recibir un nuevo click
			setTimeout(function() {
				//Se cumple el tiempo de espera, así que se deja marcado el caracter
				letra = "<span style='color:green'>" + $(this).text().charAt(contador) + "</span>";
				console.log($("#pantalla").text());
				contenido = $("#pantalla").text().substring(0, ($("#pantalla").text().lenght - 1));
				$("#pantalla").html(contenido + letra);
				espera = false;
				//Esta variable avisa que se terminó el tiempo de espera
			}, 1000);
		}
*/

//Segundo intento
/**
		var fecha = new Date();
		tiempo = fecha.getTime();
		console.log("Tiempo actual: " + tiempo);
		if ((tiempo - tiempo1) < 1000) {
			if (contador == 3) {
				contador = 0;
			} else {
				contador++;
			}
		} else {
			contador = 0;
		}
		var letra = $(this).text().charAt(contador);
		var cont = $("#pantalla").text();
		$("#pantalla").text(cont + letra);
		tiempo1 = tiempo;
*/

//Primer intento
/**
	t1 = fecha.getTime();
	console.log(t1);

	$(".boton").click(function() {
		t2 = fecha.getTime();
		console.log(t2);
	});

	if ((t2 - t1) < 2000) {
		var letra = $(this).text().charAt(1);
	} else {
		var letra = $(this).text().charAt(0);
	}

	$("#pantalla").text($("#pantalla").text() + letra);
*/