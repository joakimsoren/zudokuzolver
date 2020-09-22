export class Solver {
  private grid: number[][]

  constructor(grid: number[][]){
    this.grid = grid
  }

  solve():boolean {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
  
       // if empty cell
        if (this.grid[row][column] === 0) {
  
          // try possible numbers
          for (let number = 1; number <= 9; number++) {
            if (this.isNumberValid(row, column, number)) {
              // set number if valid
              this.grid[row][column] = number;
  
              if (this.solve()) { 
                // recursively backtrack
                return true;
              } else { 
                // if a solution were not found, reset cell and continue loop
                this.grid[row][column] = 0;
              }
            }
          }
          return false;
          }
        }
      }
      // sudoku solved
      return true;
  }

  print(){
    console.log(this.grid)
  }
  
  private isNumberInRow(row: number , number: number ): boolean {
    for (let i = 0; i < 9; i++){
      if (this.grid[row][i] === number){
        return true;
      }
    }
    return false;
  }
  
  private isNumberInColumn(column: number, number: number): boolean {
    for (let i = 0; i < 9; i++){
      if (this.grid[i][column] === number){
        return true;
      }
    }
    return false;
  }
  
  private isNumberInBox(row: number, column: number, number: number): boolean {
    let r: number = row - row % 3;
    let c: number = column - column % 3;
      
      for (let i = r; i < r + 3; i++)
        for (let j = c; j < c + 3; j++)
          if (this.grid[i][j] === number)
            return true;
      
      return false;
  }
  
  private isNumberValid(row: number, column: number, number: number): boolean {
    return !this.isNumberInRow(row, number) && !this.isNumberInColumn(column, number) && !this.isNumberInBox(row, column, number);
  }
}

const grid: number [][] = [
  [0,0,0,2,6,0,7,0,1],
  [6,8,0,0,7,0,0,9,0],
  [1,9,0,0,0,4,5,0,0],
  [8,2,0,1,0,0,0,4,0],
  [0,0,4,6,0,2,9,0,0],
  [0,5,0,0,0,3,0,2,8],
  [0,0,9,3,0,0,0,7,4],
  [0,4,0,0,5,0,0,3,6],
  [7,0,3,0,1,8,0,0,0]
]

// const grid: number [][] = [
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0]
// ]

const solver = new Solver(grid);
solver.solve()
solver.print()
