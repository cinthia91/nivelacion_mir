function hola (nombre){
    return "hola " + nombre + "?";
}
console.log(hola ("Pedro"));

function BMI(peso,altura){
    return (peso/altura^2);
}
console.log("Tu Indice de masa corporal es:");
console.log(BMI(65,1.8));
/* Escribe una función llamada suma que reciba un 
número positivo y retorne la suma de todos los 
números desde 1 hasta ese número:*/
function suma(num){
    let result=0;
    let i= 1;
    do{
        result= result+i;
        i= i + 1;
    } while(i<=num){
        num=result
        return("La suma del numero asignado es:" + result); 
    }
    
}
console.log( suma(5));
