//Rule Book

function Alphabet(rows: number): void {
  const A_Code = "A".charCodeAt(0);

  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(A_Code + j);
    }

    console.log(line);
  }
}

Alphabet(5);
