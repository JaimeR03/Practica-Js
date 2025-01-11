/**
 * crear un algoritmo que me diga cuantos positivos hay 
 */

let array =  [5,3,6,7,8,9,-100,-4,-9]

function cuantosPositivos(arr){
     let cantidad=0;
  for (elemento of arr){
    if(elemento>0){

      cantidad++;
    }

  }

  return cantidad;
}
let numP = cuantosPositivos(array);
console.log(numP);