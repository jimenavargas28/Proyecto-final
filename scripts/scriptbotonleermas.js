function toggleBloque(){
    var demo= document.getElementById("demo");
    var operaciones= document.getElementById("operacionesContenedor");  
    
    if (operaciones.style.display === "none"){
        demo.textContent = "mostrar mas  "
        operaciones.style.display="block"

    }else{
        demo.textContent = "Mostrar menos "
        operaciones.style.display="none"
    }

}