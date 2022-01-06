const fib = (n) => {
    // Write a function `fib(n)` that takes in a number as an argument.
    // The function should return the n-th number of the Fibonacci sequence.
    //  the 0th number of the sequence is 0.
    //  the 1st number of the sequence is 1.
    // To generate the next number of the sequence, we sum the previous two numbers.
    const table = Array(n + 1).fill(0);
    // console.log(table)
    table[1] = 1
    // console.log(table)
    for(let i =0; i <=n; i++){
        table[i+1] += table[i]
        table[i+2] += table[i]
    }
    return table[n]

}

console.log(fib(7))
console.log(fib(10))
console.log(fib(50))
console.log(fib(3))