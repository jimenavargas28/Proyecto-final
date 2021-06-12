function mostrarMas(){
    var boton= document.getElementById("boton");
    var masTexto= document.getElementById("masTexto");  
    
    if (masTexto.style.display === "none"){
        boton.textContent = "Leer menos"
        masTexto.style.display="block"

    }else{
        boton.textContent = "Leer mas"
       masTexto.style.display="none"
    }

}
function toggleHobbies(){
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var paseos_galeria=document.getElementById("paseos_galeria"); 
    
    paseos_galeria.style.display="none";
    hobbies_galeria.style.display="block";
    mascotas_galeria.style.display="none";
};

function toggleMascotas(){
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var paseos_galeria=document.getElementById("paseos_galeria"); 
  
    paseos_galeria.style.display="none";
    hobbies_galeria.style.display="none";
    mascotas_galeria.style.display="block";
  
};

function togglePaseos(){
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var paseos_galeria=document.getElementById("paseos_galeria"); 
    
    paseos_galeria.style.display="block";
    hobbies_galeria.style.display="none";
    mascotas_galeria.style.display="none";
};
