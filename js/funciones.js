var elemento = 0;
function Capturar() {
    // Agregamos los elementos de forma horizontal.
    var row = document.getElementById("renglon");
    var valor = row.insertCell(-1);
    // Asignamos el valor al elemento.
    var row2 = document.getElementById("renglon2");
    var valor2 = row.insertCell(-1);
    valor2.innerHTML = document.getElementById("datos").value;

    // Agregamos los elementos de forma vertical.
    var columna = document.getElementById("tabla_vertical");;
    var renglonVertical = columna.insertRow(-1);
    var valorVertical = renglonVertical.insertCell(0);
    
    valorVertical.innerHTML = document.getElementById("datos").value;
    document.getElementById("datos").value = "";
    document.getElementById("datos").focus = "";

    // Generar un numero entero "aleatorio" entre 1 y 1000.
    document.getElementById("datos").value = Math.floor(Math.random()*1000);
    console.log(Math.floor(document.getElementById("datos").value));

    document.getElementById("arreglo").innerHTML = `Capture el elemento [${elemento}]`;
    valor.innerHTML = `[${elemento}]`;

    elemento++;
    if (elemento >= 9) {
        document.getElementById("datos").disabled = true;
        document.getElementById("boton").disabled = true;
    }
}

function Reiniciar() {
    document.getElementById("datos").disabled = false;
    document.getElementById("boton").disabled = false;
    document.getElementById("arreglo").innerHTML = `Capture el elemento [0]`;

    elemento = 0;
    valor = 0;
    valor2 = 0;
    valorVertical = 0;
    document.getElementById("renglon").innerHTML = "";
    document.getElementById("renglon2").innerHTML = "";
    document.getElementById("tabla_vertical").innerHTML = "";
}