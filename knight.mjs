import { createMatrix, mapIndex, getIndex } from "./helperFunctions.mjs";

// declare boardArray for adjacency matrix
// fill boardArray with legal moves (adjacency matrix)
const board = createMatrix();

// populate queueArray with first node, and null, for breadth first search function
function setQueueArray(startingPosition) {
  const queueArray = [];
  queueArray.push(mapIndex(startingPosition));
  // queueArray.push(null);
  return queueArray;
}

function findShortestPath(visitedArray, queueArray, finalPosition) {
  // console.table(board);

  let foundPath = false;
  let numberOfMoves = 0;

  // extracts first item from queueArray
  let currentArrayItem;

  while (foundPath === false) {
    // while (queueArray.length !== 0)
    // if (queueArray[0] === null) {
    //   return null;
    // }
    // console.log("queueArray item 0");
    // console.log(queueArray[0]);
    // console.log("current Array Item " + currentArrayItem);
    // console.log("boardArray - current Array Item");
    // console.log(board[currentArrayItem]);
    // console.log(board[currentArrayItem][0]);
    // console.log(board[currentArrayItem][0].length);
    // currentArrayItem = ;

    // extracts array of verticies from first item in ququeArray
    const verticiesArray = board[queueArray[0]];
    console.log("verticies Array length");
    console.log(verticiesArray.length);
    console.log(verticiesArray);

    // loops through verticiesArray to find match, or enqueue next positions
    for (let i = 0; i < verticiesArray.length; i++) {
      console.log("final Position");
      console.log(finalPosition);
      console.log(verticiesArray[i]);

      console.log("queueArray");
      console.log(queueArray);
      if (
        verticiesArray[i][0] === finalPosition[0] &&
        verticiesArray[i][1] === finalPosition[1]
      ) {
        numberOfMoves++;
        console.log("we found final!");
        foundPath = true;
        console.log(foundPath);
        break;
        // return (foundPath = true);
      } else {
        if (!visitedArray.includes(mapIndex(verticiesArray[i]))) {
          visitedArray.push(mapIndex(verticiesArray[i]));
          queueArray.push(mapIndex(verticiesArray[i]));
        }
      }
    }
    numberOfMoves++;

    queueArray.shift();
    // queueArray.push(null);
    console.log("queueArray");
    console.log(queueArray);

    console.log("visitedArray");
    console.log(visitedArray);
  }

  console.log("numberOfMoves");
  console.log(numberOfMoves);
}

// let finalIndex = mapIndex(finalPosition);
// console.log("final index " + finalIndex);

const queueArray = setQueueArray([0, 0]);
const visitedArray = [];
findShortestPath(visitedArray, queueArray, [3, 2]);
