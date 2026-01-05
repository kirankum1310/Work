//Rule Book

function Alphabet(rows: number): void {
  const A_Code = "A".charCodeAt(0);

  for (let i = 1; i <= rows; i++) {
    let line = "";

    line += "  ".repeat(rows - i);

    for (let j = 0; j < 2 * i - 1; j++) {
      line += String.fromCharCode(A_Code + j) + " ";
    }

    console.log(line.trimEnd());
  }
}

Alphabet(6);
