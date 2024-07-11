
const keys = ['a', 'e', 'i', 'o', 'u'];
let str;


let encriptar = () => {


    getText();

}


let getText = () => {

    let textAreas = ['textarea-desktop', 'textarea-movil']

    for (let i = 0; i < textAreas.length; i++) {

        document.getElementById(textAreas[i]).textContent = str;

    }

}


let validacion = () => {

    str = document.getElementById('input-area__text').value;
  
    const regex = /[^a-z ]w?/g;

    if (regex.exec(str)) {

        alert('Solo se permiten minusculas y sin acentos')
        eliminarTextoAdicional(str);

    }

}

let eliminarTextoAdicional = (strng) => {

    str = strng.substring(0, strng.length - 1);
    document.getElementById('input-area__text').value = str;

}