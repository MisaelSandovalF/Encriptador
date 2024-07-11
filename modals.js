let resizeBrowser = () =>  {
    
    let widthBrowser = window.outerWidth;
    console.log(widthBrowser);
    
    document.getElementById('muñeco').style.display = 'display';
    if (widthBrowser < 1024 ){
      
        document.getElementById('output-text-area').style.display = 'none';
        document.getElementById('muñeco').style.display = ' inline-block';
        
       
    }
    else if(widthBrowser > 1024){
     
        document.getElementById('dinamic-container-id').style.display = ' none';
    }
   
}


const activeModal = () =>{
        
    const screenWidth = screen.width;
    const breakpoint = 1024;

    if (screenWidth < breakpoint) {
        document.getElementById('dinamic-container-id').style.display = 'flex';
        
       
    }
   
    if (screenWidth > breakpoint) {
       document.getElementById('output-text-area').style.display = 'flex';
       document.getElementById('muñeco').style.display = 'none';

   }
  

}

const closeModal = () =>{
 
    
    document.getElementById('dinamic-container-id').style.display = 'none';
}


    

