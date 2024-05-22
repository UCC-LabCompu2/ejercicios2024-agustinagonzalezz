/**
 * Descripción
 * permite convertir metros, pies, pulgadas, yarda
 * @method convertirUnidades
 * @param {String} nombre
 * @param {number} valor
 */

function convertirUnidades(nombre, valor){
    if (isNaN(valor)){
        document.getElementById("metro").value= "";
        document.getElementById("pulgada").value= "";
        document.getElementById("pie").value= "";
        document.getElementById("yarda").value= "";
        alert("El valor ingresado no es correcto");
    }
    if (nombre === "metro"){
        document.getElementById("pulgada").value = valor * 39.37;
        document.getElementById("pie").value = valor * 3.28;
        document.getElementById("yarda").value = valor * 1.09361;
    }
    else if (nombre === "pulgada"){
        document.getElementById("metro").value = valor * 0.0254;
        document.getElementById("pie").value = valor * 0.8333;
        document.getElementById("yarda").value = valor * 0.0277;
    }
    else if (nombre === "pie"){
        document.getElementById("metro").value = valor * 0.3048;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor * 0.333333;
    }

    else if (nombre === "yarda"){
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
        document.getElementById("metro").value = valor *0.9144;
    }
}