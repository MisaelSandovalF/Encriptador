

const keys = {

    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',

}

let str = '';
let txtEncriptado = ''; 
let txtDesencriptado = '';
let txtOutputCopy = '';
// let claves = Object.keys(keys);


let desencriptar = () => {
    //texto debe de contenter el textto YA ENCRIPTAO PARA QUE FUNCIONE
    //si ponemos el texto ecnriptado y lo desencriptamos de nuevo entonces no funciona

    //PARA SOLUCIONARLO SOLO ES NECESARIO GUARDAR EL VALOR DEL PANEL DE INCRIPTACION DE LADO DERECHO E IGUALARLO A LA VARIABLE TEXTO
    // let texto = 'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober';
    txtEncriptado = document.getElementById('input-area__text').value;
    txtDesencriptado = txtEncriptado;

    for (const clave in keys) {
        if (keys.hasOwnProperty(clave)) {
            const valor = keys[clave];
            txtDesencriptado = txtDesencriptado.replace(new RegExp(valor, 'g'), clave);
        }
    }

    console.log('DESENCRIPTADOR: ', txtDesencriptado);
    txtEncriptado = "";
    sendText(txtDesencriptado);


}

let encriptar = () => {


        let texto = str.split('');

        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i];
    
            if (keys.hasOwnProperty(letra)) {
                txtEncriptado += keys[letra];
            } else {
                txtEncriptado += letra;
            }
        }
    
        console.log('ENCRIPTADOR: ', txtEncriptado);
    
        sendText(txtEncriptado);
    






}


let sendText = (str) => {
    
    txtOutputCopy = str;
   
    
    let textAreas = ['textarea-desktop', 'textarea-movil']
    for (let i = 0; i < textAreas.length; i++) {
        document.getElementById(textAreas[i]).textContent = txtOutputCopy;


    }

    blockBttns();

   

   



}





const copiarTxt = async() => {

    try {
      
        let txt = txtOutputCopy;
        await navigator.clipboard.writeText(txt);
        
        console.log('txt Copy', txt);
        document.getElementById('input-area__text').value = "";
        // txtEncriptado = "";
        document.getElementById('output-text-area').style.display = 'none';
        document.getElementById('muñeco').style.display = 'inline-block';
        document.getElementById('dinamic-container-id').style.display = 'none';
        txt = txtEncriptado;
      

    } catch (error) {
        console.log('No se pudo copiar el texto',error)
    }

}


const validacion = (event) => {
 
    let string = event.target.value;
    event.target.value = string.trimStart();
    let x = event.target.value;





    str = document.getElementById('input-area__text').value;
  
    
    const regex = /[^a-z ]w?/g;


    activeBttns();



    if (regex.exec(str) || !x ) {
        console.log('regex.exec(str) ', regex.exec(str));

        alert('Solo se permiten minusculas y sin acentos');

        eliminarTextoAdicional(str);

    }

    if(str === txtEncriptado){
        document.getElementById('encriptar').disabled = true;
        console.log('es el mismo');
        
     
    }
    else{
        document.getElementById('encriptar').disabled = false;
        console.log('no es el mismo');

        console.log('str', str);
        console.log('txtDesencriptado', txtDesencriptado);
        
    }


}



let eliminarTextoAdicional = (strng) => {


   

    str = strng.substring(0, strng.length - 1);
    console.log('str', str);

    if (str.length === 0 ) {

 
        document.getElementById('input-area__text').value = str;
        blockBttns();
    }
    else {
    
        document.getElementById('input-area__text').value = str;
    }




}


const blockBttns = () => {
        
    document.getElementById('encriptar').disabled = true;
    document.getElementById('desencriptar').disabled = true;

}


const activeBttns = () => {
        
    document.getElementById('encriptar').disabled = false;
    document.getElementById('desencriptar').disabled = false;

}