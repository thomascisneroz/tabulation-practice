const bestSum = (targetSum, numbers) => {
    // Write a function `bestSum(tsrgetSum , numbers)` that takes in a targetSum and an array of numbers as arguments.
    // The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
    // If there is a tie for the shortest combination, you may return any one of the shortest.
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for(let i =0; i <= targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                const combo = [...table[i], num]; 
                if( !table[i+num] || table[i+num].length > combo.length){
                    table[i+num] = combo
                }
            }
        }
    }
    return table[targetSum]
}

console.log(bestSum(8, [2,3,5])) // [3,5]
console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]