/*encontrar el numero mas grande en una lista */
let numeros = [15,1,2,3,4,5,10,800];
let max=1

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > max) {
    max= numeros[i];
  }
}

console.log('El numero mas grande es ' + max); 
