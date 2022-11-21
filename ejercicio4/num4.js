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

