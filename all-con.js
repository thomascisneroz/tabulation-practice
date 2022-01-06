const allConstruct = (target, wordBank) => {
    // Write a function `allConstruct(target, wordBank)` that accepts a target string and an array  of strings.
    // The function should return a 2d array containing all  of the ways that the `target` can be constructed by concatenating elements of the `wordBank` array. Each element of the 2d array shold represent one combination that constructs the target`.
    // You may reuse elements of `wordBank` as many times as needed.
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word){
               const newCombo = table[i].map(subArray => [...subArray, word])
               table[i + word.length].push(...newCombo);
            }
        }
    }
    return table[target.length]
}

console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd','ef','c']))
console.log(allConstruct('alucard', ['drac','alu','c','ard','rd','luc']))