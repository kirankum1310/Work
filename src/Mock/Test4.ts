function printHollowSquare(size: number): void {
  for (let i = 1; i <= size; i++) {
    let line = "";

    for (let j = 1; j <= size; j++) {
   
      if (i === 1 || i === size || j === 1 || j === size) {
        line += "$ ";
      } else {
        line += "  ";
      }
    }

    console.log(line.trimEnd());
  }
}

printHollowSquare(5);
