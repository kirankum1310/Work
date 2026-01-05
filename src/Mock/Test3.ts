function printDiamondStar(rows: number): void {
  // Upper half (including middle)
  for (let i = 1; i <= rows; i++) {
    let line = "";

    line += "  ".repeat(rows - i);


    line += "* ".repeat(2 * i - 1);

    console.log(line.trimEnd());
  }

  // Lower half
  for (let i = rows - 1; i >= 1; i--) {
    let line = "";

    line += "  ".repeat(rows - i);

    // Stars
    line += "* ".repeat(2 * i - 1);

    console.log(line.trimEnd());
  }
}

printDiamondStar(4);
