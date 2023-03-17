
    for(var x = 0; x<101; x++){
    if(x % 3 == 0){
        console.log("Fizz")
    }
    if(x % 5 == 0){
        console.log("Buzz")
    }
    if(x % 3 ==0 && x % 5 == 0){
        console.log("Fizzbuzz")
    }
    else{
        console.log(x);
    }
}
