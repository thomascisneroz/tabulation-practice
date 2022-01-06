const howSum = (targetSum, numbers) => {
    // Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
    // The function should return an array containing any combination of elements that add up to exactly the targetSum.
    // If there is no combination that adds up to the targetSum, then return null.
    // If there are multiple combinations possible, you may return any single one.
    const table = Array(targetSum + 1).fill(null);
    table[0] = []; // base case
    if(targetSum === 0) return []; 

    for( let i = 0; i <= targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                table[i+num] = [...table[i], num];
            }
        }
    }
    return table[targetSum];
}

console.log(howSum(7, [5,3,4])); // [4, 3]