function reverseString(str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

let word = "TypeScript";
let reversed = reverseString(word);
console.log("Original:", word);
console.log("Reversed:", reversed);
