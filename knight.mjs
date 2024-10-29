import { createMatrix, mapIndex, getIndex } from "./helperFunctions.mjs";

// declare boardArray for adjacency matrix
const boardArray = [];
// fill boardArray with legal moves (adjacency matrix)
const board = createMatrix(boardArray);

// declare queue Array for breadth first search function
const queueArray = [];
function findFastest(starting, final) {
  // console.log(starting);
  let startingIndex = mapIndex(starting);
  console.log("starting index " + startingIndex);

  // initialising queueArray with starting vertex
  queueArray.push(startingIndex);
  queueArray.push(null);

  console.log(boardArray);

  let currentArrayItem;
  if (queueArray[0] != null) {
    console.log("queueArray item 0");
    console.log(queueArray[0]);
    currentArrayItem = queueArray.shift();
    console.log("current Array Item " + currentArrayItem);

    console.log("boardArray - current Array Item");

    console.log(boardArray[currentArrayItem]);
    console.log(boardArray[currentArrayItem][0]);

    console.log(boardArray[currentArrayItem][0][0]);

    console.log(boardArray[currentArrayItem][0].length);

    console.log(queueArray);
  }

  console.log(final);
  let finalIndex = mapIndex(final);
  console.log("final index " + finalIndex);
}

const index = getIndex(2);

// console.log(index);
// console.log(index.y);
// console.log(index.x);

findFastest([0, 0], [7, 7]);

// console.log(queueArray);
