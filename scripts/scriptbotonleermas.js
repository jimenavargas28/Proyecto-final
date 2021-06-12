function mostrarMas(){
    var boton= document.getElementById("boton");
    var masTexto= document.getElementById("masTexto");  
    
    if (masTexto.style.display === "none"){
        boton.textContent = "Leer mas"
        masTexto.style.display="block"

    }else{
        boton.textContent = "Leer menos"
       masTexto.style.display="none"
    }

}