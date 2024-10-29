import { createMatrix, mapIndex, getIndex } from "./helperFunctions.mjs";

const boardArray = [];

const board = createMatrix(boardArray);

console.log(board[1]);

function findFastest(starting, final) {
  console.log(starting);
  let startingIndex = mapIndex(starting);
  console.log(startingIndex);

  console.log(final);
  let finalIndex = mapIndex(final);
  console.log(finalIndex);
}

const index = getIndex(2);

console.log(index);
console.log(index.y);
console.log(index.x);

findFastest([0, 0], [7, 7]);
