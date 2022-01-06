const gridTraveler = (m, n) => {
    // Say that you area a traveler on a 2d grid. You begin in the top left corner and your goal is to travel to the bottom-right corner. You may only move down or right. 
    // In how many ways can you travel to the goal on a grid with dimensions m * n?
    // Write a funciton `gridTraveler(m * n)` that calculates this.
    const table = Array(m + 1).fill().map(() => Array(n+1).fill(0))
    table[1][1] = 1;
    // console.log(table)
    for(let i =0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            const current = table[i][j];
            if(j+1 <= n) table[i][j+1] += current;
            if(i+1 <= m) table[i+1][j] += current;
        }
    }
    return table[m][n];
}


// Tabulation Recipe 
// step 1
// Visualize the problem as a table
// step2
// size the table based on the inputs of the problem
// step 3
// initialize the table with default values
// step 4
// seed the trivial answer into the table
// step 5
// fill further positions based on the current position



console.log(gridTraveler(3,3)) // -> 6
console.log(gridTraveler(3,2)) // -> 3 
console.log(gridTraveler(18,18)) // -> 2333606220