const countConstruct = (target, wordBank) => {
    // Wrtie a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
    // The function should return the number of ways that the `target` can be constructed by concatenating elements of the `worfdBank` array.
    // You may reuse elements of `wordBank` as many times as needed.
    const table = Array(target.length + 1).fill(0)
    table[0] = 1;
    for( let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i + word.length) === word){
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length]
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('skateboard', ['ska', 'ate', 'rd', 't', 'boar']))
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
