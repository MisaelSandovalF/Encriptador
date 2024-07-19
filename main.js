
// Objetos de llaves
const keys = {

    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',

}
//  Variables
let str = '';
let txtEncriptado = '';
let txtDesencriptado = '';
let txtOutputCopy = '';
// let claves = Object.keys(keys);

//  Funcion desencriptar
let desencriptar = () => {
    //  Almacenamos el valor del input en la variable txtRncriptado
    //  txtEncriptado = document.getElementById('input-area__text').value;
    //  Asiganmos el valor de la variable auxiliar a la variable 
    //  txtDesencriptado = txtEncriptado;

    // Almacenamos el valor (string) del input-area__text en la variable txtDesencriptado
    txtDesencriptado = document.getElementById('input-area__text').value;

    // Iteramos nuestro objeto con un For..in
    for (const clave in keys) {
        //  Validamos si en el objeto keys hay una propiedad suya
        if (keys.hasOwnProperty(clave)) {
            //  Si se cumple guardamos el valor de la propiedad del obejto en la variable valor ('ai => valor, 'enter' => valor, etc)
            const valor = keys[clave];
            //  'Remplace' es un metodo para remover ciertos caracteres en una cadena de texto
            //  Al crear un objeto RegExp dentro de 'remplace' le decimos que busque exactamente en la cadena de texto una coincidencia (es encesario añadir una expresion regular)
            //  La expresion regular incluye la variable de valor (que mantiene almacenado el valor de las propiedades del objeto keys) y la letra 'g' que nos ayudara a realizar un barrido de la cadena global de inicio a fin y no solo una ocacion 
            //  Despues de realizar esa operacion se asigna de nuevo a la variable txtDesencriptado
            txtDesencriptado = txtDesencriptado.replace(new RegExp(valor, 'g'), clave);
        }
    }

    console.log('DESENCRIPTADOR: ', txtDesencriptado);
    //  limpiamos el valor de la variable txtEncriptado
    txtEncriptado = "";
    //  Enviamos el string desencriptado a la funcion sendText
    sendText(txtDesencriptado);


}

// Funcion para encriptar

let encriptar = () => {

    //  Asignamos el valor de la division de cadenas a la variable texto
    let texto = str.split('');

    // Barremos la longitud del valor ( recorrremos letra por letra de la cadena de texto)
    for (let i = 0; i < texto.length; i++) {

        // Almacenamos la letra en la variable letra
        let letra = texto[i];

        //Validamos si letra esta en el objeto
        if (keys.hasOwnProperty(letra)) {

            // concatenamos a la variable txtEncriptado ese valor
            txtEncriptado += keys[letra];
        } else {

            // y si no se valida se concatena el valor de la variable letra al txtEncripatdo
            txtEncriptado += letra;
        }
    }

    console.log('ENCRIPTADOR: ', txtEncriptado);

    // Se llama a sendText y se le encia el txtEncriptado
    sendText(txtEncriptado);
    // txtEncriptado = "";
    document.getElementById('input-area__text').disabled = true;
    // document.getElementById('input-area__text').style.background= '#CED4DA';

}

// Funcion para enviar el texto a otros text-areas
let sendText = (str) => {

    // Asigamos el valor del string a la variable txtOutputCopu
    txtOutputCopy = str;

    // Almacenmos en este arreglo los id de los elementos
    let textAreas = ['textarea-desktop', 'textarea-movil']
    // Barremos la longitud del arreglo
    for (let i = 0; i < textAreas.length; i++) {
        // Le asignamos a cada elemento el valor del txtOutputCopy
        document.getElementById(textAreas[i]).textContent = txtOutputCopy;
    }
    // Llamamos a la funcion de bloquear botones
    blockBttns();

}



// Funcion asincrona para copiar texto al portapapeles

const copiarTxt = async () => {
    //  Usamos un try...catch para manejar errores 
    try {
        //  Asignamos el valor del textocopiado a txt
        let txt = txtOutputCopy;

        //  Esperamos la promesa del objeto
        //  Le enviamos como argumento txt ( el string que queremos copiar)
        await navigator.clipboard.writeText(txt);

        //  Limpiamos el input-area__text
        document.getElementById('input-area__text').disabled = false;
        // document.getElementById('input-area__text').style.background= 'transparent';
        document.getElementById('input-area__text').value = "";

        //  ocultamos el elemento output-text__area
        document.getElementById('output-text-area').style.display = 'none';
        //  Le asignamos un display inline block al elemento
        document.getElementById('muñeco').style.display = 'inline-block';
        //  ocultamos el elemento output-text__area
        document.getElementById('dinamic-container-id').style.display = 'none';
        txt = txtEncriptado;

        //  Atrapamos el error
    } catch (error) {
        // Mostramos el error
        console.log('No se pudo copiar el texto', error)
    }

}

// Funcion para validar el texto del input, esta funcion va a recivir un evento
const validacion = (event) => {
    //  Almacenmos el eento en la variable string
    let string = event.target.value;
    //  trimStart elimina los espacios pero solo los que estan al incio y ese valor se le asigna al evento
    event.target.value = string.trimStart();
    //  Se guarda el valor en otra variable para poder manejarla mas adelante
    let x = event.target.value;

    // Se le asigna a str el valor (string) del elemento input-area__text
    str = document.getElementById('input-area__text').value;
    //  Se crea una variable con una expresion regular
    //  /[^a-z ]w?/g indica que coincidira con cualquier caracter que NO este dentro de los corchetes, en este caso el rango en minusculas de 'a-z'
    //  El espacio en blanco indica que negara todos los caracteres especiales excepto el espacio 
    //  la 'w' minuscula Busca cualquier caracter alfanumErico del alfabeto latino bAsico, incluido el caracter de subrayado
    //  La 'g' indica que se abarcara de forma global
    const regex = /[^a-z ]w?/g;

    //  Llamamos a la funcion de activar botones
    activeBttns();


    //  Validmos si en la cadena str hay alguna coincidencia con el valor de la variable regex
    if (regex.exec(str) || !x) {
        //En caso de que seas asi se notifica al usuario con un alert
        alert('Solo se permiten minusculas y sin acentos');
        //Se llama la funcion para eliminar el texto adicional y se le envia el valor de la cadena a la cual se le modificara
        eliminarTextoAdicional(str);

    }
    console.log('str  rr ', str);
    console.log('txtEncriptado', txtEncriptado);
    
    
    // Validamos si el valor del string es identico al valor del textoEncriptado 
    if (str == txtEncriptado) {
        //En caso de que seas asi entonces bloqueamos el boton de encriptar
        document.getElementById('encriptar').disabled = true;
         txtEncriptado = "";

    }
    else {
        //En caso de que no seas asi entonces activamos el boton de encriptar
        document.getElementById('encriptar').disabled = false;
         txtEncriptado = "";
    }




}


//  Funcion adicional para eliminar numeros, caracteres especiales o mayusculas del string principal
let eliminarTextoAdicional = (strng) => {



    //  Eliminamos el ultimo caracter de la cadena str
    str = strng.substring(0, strng.length - 1);

    //  Validamos si la longitud de la variable es igual a 0 los botonoes se bloquean y se asigna el valor de str al input-area__text 
    if (str.length === 0) {


        document.getElementById('input-area__text').value = str;
        blockBttns();
    }
    // Si no se valida solo se  asigna el valor de str al input-area__text 
    else {

        document.getElementById('input-area__text').value = str;
    }




}

// Funcion para desactivar botones
const blockBttns = () => {

    document.getElementById('encriptar').disabled = true;
    document.getElementById('desencriptar').disabled = true;

}

// Funcion para activar botones
const activeBttns = () => {

    document.getElementById('encriptar').disabled = false;
    document.getElementById('desencriptar').disabled = false;

}