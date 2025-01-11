/**
 * 
 *crear un algoritmo que nos devuelva el numero mayor y menor de un arreglo  
 */
 let array = [4,5,2,-100,-5,1000];

 function getMayorMenor(arr){
    let mayor = arr[0];
    let menor= arr[0];
   
    for(let numero of arr){
       menor = menor < numero ? menor : numero;//operador ternario
    }
    
    for(let numero of arr){
        menor = menor > numero ? menor : numero;
     }

 }
let numeros = getMayorMenor(array)
console.log(numeros);