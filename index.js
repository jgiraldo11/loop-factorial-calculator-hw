// Factorial Calculator
//one parameter: positive whole number
//return the factorial of the number
//ex: 5! = 5 x 4 x 3 x 2 x 1  = 120
//https://www.mathsisfun.com/numbers/factorial.html

function factorialCalculator(number) {
    let result = 1
    for (let i=0; i < number; i++) { 
        result = result*(i+1) 
        console.log(result)
    }
} 
factorialCalculator(10)