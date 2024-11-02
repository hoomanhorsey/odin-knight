import { createMatrix, mapIndex, getIndex } from "./helperFunctions.mjs";

// declare boardArray for adjacency matrix, filled with legal moves (adjacency matrix)
const board = createMatrix();

function findShortestPath(
  visitedArray,
  queueArray,
  predecessorArray,
  finalPosition
) {
  let foundPath = false;

  while (foundPath === false) {
    // extracts array of verticies from first item in queueArray
    const verticiesArray = board[queueArray[0]];
    // console.log(
    //   "current position: " +
    //     queueArray[0] +
    //     ", verticies Array length: " +
    //     verticiesArray.length
    // );

    // loops through verticiesArray to find match, or enqueue next positions
    for (let i = 0; i < verticiesArray.length; i++) {
      // console.log(
      //   "*** Loop to compare final with vertex*** \nfinal Position:    " +
      //     finalPosition +
      //     ", map index: " +
      //     mapIndex(finalPosition)
      // );
      // console.log(
      //   "verticiesArray[i]: " +
      //     verticiesArray[i] +
      //     ", map index: " +
      //     mapIndex(verticiesArray[i])
      // );

      // Compares vertex with final position
      if (
        verticiesArray[i][0] === finalPosition[0] &&
        verticiesArray[i][1] === finalPosition[1]
      ) {
        // If there is a match
        // console.log("we found final!");
        foundPath = true;
        visitedArray.push(mapIndex(verticiesArray[i]));
        queueArray.push(mapIndex(verticiesArray[i]));
        predecessorArray.push([queueArray[0], mapIndex(verticiesArray[i])]);
        break;
      } else {
        // if there is not a match, check if vertex has been visited.
        if (!visitedArray.includes(mapIndex(verticiesArray[i]))) {
          // if vertex hasn't been visited, add to visitedArray and enqueue position
          visitedArray.push(mapIndex(verticiesArray[i]));
          queueArray.push(mapIndex(verticiesArray[i]));
          predecessorArray.push([queueArray[0], mapIndex(verticiesArray[i])]);
        }
      }
    }
    // delete first position from queueArray
    queueArray.shift();
  }
}

function tracePath(predecessorArray, finalPosition, startPosition) {
  const traceArray = [mapIndex(finalPosition)];
  let currentPosition = mapIndex(finalPosition);

  while (currentPosition !== mapIndex(startPosition)) {
    for (let i = 0; i < predecessorArray.length; i++) {
      if (predecessorArray[i][1] === currentPosition) {
        // console.log(predecessorArray[i]);
        // console.log(traceArray);
        traceArray.push(predecessorArray[i][0]);
        currentPosition = predecessorArray[i][0];
      }
    }
  }
  const tempArray = traceArray.reverse();
  const finalPathArray = tempArray.map(getIndex);
  console.log(
    "You made it in " +
      (finalPathArray.length - 1) +
      " moves. Here's your path:"
  );
  for (let i = 0; i < finalPathArray.length; i++) {
    console.log(finalPathArray[i]);
  }
}

// calling functions
let startPosition = [0, 0];
let finalPosition = [7, 7];

// Populates queueArray and visitedArray with the startPosition
const queueArray = [mapIndex(startPosition)];
const visitedArray = [mapIndex(startPosition)];
const predecessorArray = [];

// traverses the board, to find all paths, quits upon finding final position
findShortestPath(visitedArray, queueArray, predecessorArray, finalPosition);

// traces shortest bath based on predecessorArray
tracePath(predecessorArray, finalPosition, startPosition);
