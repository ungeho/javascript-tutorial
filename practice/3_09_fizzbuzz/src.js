var fizzbuzz = function(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz!';
    } else if(num % 3 === 0) {
        return 'Fizz!';
    } else if(num % 5 === 0) {
        return 'Buzz!';
    } else {
        return num;
    }
}


for(var i = 0; i <= 30; i++) {
    console.log(fizzbuzz(i));
}
