function total(cantidad, categoria){
    let precio = 200
    let totalAPagar = 0
    

     switch (categoria) {
         case "estudiante":
             totalAPagar=precio*cantidad*0.2
             break;

         case "trainee":
            totalAPagar=precio*cantidad*(1-50/100)
         break;

         case "junior":
             totalAPagar=precio*cantidad*(1-15/100)
         break;
    
         default:
             break;
     }


    return totalAPagar
}

let divTotal = document.getElementById("total")

let cantidad = document.getElementById("cant")

let categoria = document.getElementById("categoria")

let formulario = document.getElementById("formularioTickets")

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault() //quita comportamiento por defecto
    divTotal.textContent = "Total a pagar: $ " + total(cantidad.value, categoria.value)
    
})

formulario.addEventListener("reset", ()=>{
    divTotal.textContent = "Total a pagar: $ "
})

 

/*
==============================================================================================
=========================== LO QUE SIGUE SOLO FUE HECHO COMO UN EXPERIMENTO :) ===============
==============================================================================================
*/
//let cardEstudiante = document.getElementById("cardEstudiante")


cardEstudiante.onmouseenter = function(){
    categoria.selectedIndex = 0;
    categoria.style.backgroundColor="lightblue"
    categoria.style.borderColor="blue"
} 

cardTrainee.onmouseenter = function(){
    categoria.selectedIndex = 1;
    categoria.style.backgroundColor="#a2e8b1"
    categoria.style.borderColor="green"
    
} 

cardJunior.onmouseenter = function(){
    categoria.selectedIndex = 2;
    categoria.style.backgroundColor="lightyellow"
    categoria.style.borderColor="orange"
} 

