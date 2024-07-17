

const breakpoint = 1024;
let widthBrowser ;

let resizeBrowser = () =>  {
    widthBrowser = window.outerWidth
   
    
    document.getElementById('muñeco').style.display = 'display';
    if (widthBrowser < breakpoint ){
      
        document.getElementById('output-text-area').style.display = 'none';
        document.getElementById('muñeco').style.display = ' inline-block';    
    }
    else {
     
        document.getElementById('dinamic-container-id').style.display = ' none';
    }
}

let activeModal = () =>{

    widthBrowser = window.outerWidth
    


    if (widthBrowser < breakpoint) {
        document.getElementById('dinamic-container-id').style.display = 'flex';
        
       
    }
   
    if (widthBrowser > breakpoint) {
       document.getElementById('output-text-area').style.display = 'flex';
       document.getElementById('muñeco').style.display = 'none';

   }

}

const closeModal = () =>{   
    document.getElementById('dinamic-container-id').style.display = 'none';
    document.getElementById('input-area__text').value = "";
        txtEncriptado = "";
}


    

