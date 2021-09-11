
// Declaracion de variables

var buttonCalificaciones = document.querySelector("#calificaciones")
var buttonCalificaciones2 = document.querySelector("#calificaciones2")

// let 
// const 

// Devlaracion de funciones
function obtenerCalificaciones(){


        var calificacion = prompt("¿Cual es tu Nota?");

        if(isNaN (calificacion)){
            alert("Ingrese un numero")
        }

        else{ var redondear = Math.round(calificacion) }

            alert("Tu nota es: "+redondear)



}


function adivinaNumero(){
                
        var n1 = prompt("Ingrese su numero")
        var calificacion = Math.random();
        var aleatorio = Math.round(calificacion*10)
    
        if(isNaN (n1)){
            alert("Ingrese un numero")
        }
        if( n1 == aleatorio){
            alert("Los numeros son iguales  "+n1+"!!!!!!!!!!!!!!");
    
        }
        else{
            alert("Los numeros son: el aleatorio "+aleatorio+" y el numero ingresado "+n1)
        }
    
            
            
            }
            
buttonCalificaciones.addEventListener("click", obtenerCalificaciones);
buttonCalificaciones2.addEventListener("click", adivinaNumero);



// Delegacion dde eventos


