/*Documentación que se usa en la policia desde hace años, para saber la letra.
 http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie
“Tomamos el número completo de hasta 8 cifras de nuestro DNI, lo dividimos entre 23 y nos quedamos con el resto de dicha división, o dicho de otro modo, calculamos el módulo 23 del DNI.”
“El resultado anterior es un número entre 0 y 22. A cada uno de estos posibles números le corresponde una letra, según la siguiente tabla:”
RESTO     0     1     2     3     4     5     6     7     8     9     10     11     12     13     14     15     16     17     18     19     20     21     22
LETRA     T     R     W     A     G     M     Y     F     P     D     X      B      N      J      Z      S      Q      V      H      L      C      K      E
44123456-A

2020 @ Tibor Kopca
*/

//VARIABLES
var dni, letra0;

//FUNCIONS
function calcularLetraDNI(numeroDNI) {
    if(numeroDNI == 'error'){
        return ' - entregaste la letra falsa.'
    }else{
    var resto = numeroDNI % 23          //Se divide el numero entre 23
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    var letraDNI = letras[resto]        //EL resto se sustituye por una letra
    return numeroDNI + '-' + letraDNI   //El numero con la letra (completo)
    }
}

function calcular() {
    dni = document.getElementById('inputValue').value;
    console.log(isNaN(dni.charAt(0)));        //comprobamos si la primera letra es otro que numero
    
    if (!isNaN(dni.charAt(0))) {
        console.log("Espanol")
        document.getElementById('result').innerHTML = calcularLetraDNI(dni);
    } else {
        console.log("Extranjero")
        document.getElementById('result').innerHTML = dni.charAt(0) + calcularLetraDNI(comprobarNIE(dni));
    }
}

function comprobarNIE(dni) {
    //Los NIE's de extranjeros residentes en España tienen una letra (X, Y, Z), 7 números y dígito de control.
    //X=0, Y=1, Z=2
    letra0 = dni.charAt(0).toUpperCase();               //si es primera letra algo de siguientes, es extranjero                           
    if (letra0 == 'X') {
        return dni = parseInt(0 + dni.substring(1));
    } else if (letra0 == 'Y') {
        return dni = parseInt(1 + dni.substring(1));
    } else if (letra0 == 'Z') {
        return dni = parseInt(2 + dni.substring(1));
    }else if(letra0 != 'Z'||'Y'||'X'){
        console.log("numero Extranjero no valido " + dni);
        return dni = 'error';                           //la letra no es valida
    }else{
        return dni;
    }
    
}




// var newDiv = document.createElement('div');                                  //creamos nodos/elementos
// newDiv.innerHTML = iteracion[i] + " fue " + this.coches[i]                  //por cada posicion en array 'coches' se escribe al elemento 

// newDiv.setAttribute('class', 'caja naranja');                               //agregar atributos a los caja
// var contenedor = document.getElementById('containerMain');                 //Agregar el elemento al documento
// contenedor.appendChild(newDiv);                                            //pegamos div nuevo al contenedor ya creado en documento