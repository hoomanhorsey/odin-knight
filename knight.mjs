import { createMatrix, mapIndex, getIndex } from "./helperFunctions.mjs";

// declare boardArray for adjacency matrix
// fill boardArray with legal moves (adjacency matrix)
const board = createMatrix();

function findShortestPath(
  visitedArray,
  queueArray,
  predecessorArray,
  finalPosition
) {
  // console.table(board);

  let foundPath = false;
  let numberOfMoves = -1;

  // // extracts first item from queueArray
  // let currentArrayItem;

  console.log(queueArray[0]);
  while (foundPath === false) {
    console.log(
      "********************************STARTING LOOP: " +
        numberOfMoves +
        " *****************"
    );

    // extracts array of verticies from first item in ququeArray
    const verticiesArray = board[queueArray[0]];
    console.log(
      "current position: " +
        queueArray[0] +
        ", verticies Array length: " +
        verticiesArray.length
    );
    console.log(verticiesArray);

    // loops through verticiesArray to find match, or enqueue next positions
    for (let i = 0; i < verticiesArray.length; i++) {
      console.log("*** Loop to compare final with vertex***");

      console.log(
        "final Position:    " +
          finalPosition +
          ", map index: " +
          mapIndex(finalPosition)
      );
      console.log(
        "verticiesArray[i]: " +
          verticiesArray[i] +
          ", map index: " +
          mapIndex(verticiesArray[i])
      );

      // Compare vertex with final position
      if (
        verticiesArray[i][0] === finalPosition[0] &&
        verticiesArray[i][1] === finalPosition[1]
      ) {
        // If there is a match
        // numberOfMoves++;
        console.log("we found final!");
        foundPath = true;
        console.log(foundPath);
        visitedArray.push(mapIndex(verticiesArray[i]));
        queueArray.push(mapIndex(verticiesArray[i]));
        predecessorArray.push([queueArray[0], mapIndex(verticiesArray[i])]);

        // predecessorArray.push(
        //   `'predecessor': ${queueArray[0]}, 'vertex': ${mapIndex(
        //     verticiesArray[i]
        //   )}`
        // );
        break;
        // return (foundPath = true);
      } else {
        // if there is not a match, check if vertex has been visited.
        if (!visitedArray.includes(mapIndex(verticiesArray[i]))) {
          // if vertex hasn't been visited, add to visitedArray and enqueue position
          visitedArray.push(mapIndex(verticiesArray[i]));
          queueArray.push(mapIndex(verticiesArray[i]));

          console.log("Enqueuing and adding to visited Array");

          predecessorArray.push([queueArray[0], mapIndex(verticiesArray[i])]);
          // predecessorArray.push(
          //   `{'predecessor': ${queueArray[0]}, 'vertex': ${mapIndex(
          //     verticiesArray[i]
          //   )}}`
          // );
        }
      }
    }

    // delete first position from queueArray
    queueArray.shift();
    console.log("queueArray");
    console.log(queueArray);

    console.log("visitedArray");
    console.log(visitedArray);

    console.log("predecessorArray");
    console.log(predecessorArray);

    numberOfMoves++;
  }

  console.log("numberOfMoves");
  console.log(numberOfMoves);
}

function tracePath(predecessorArray, finalPosition, startPosition) {
  const traceArray = [mapIndex(finalPosition)];

  let currentPosition = mapIndex(finalPosition);

  while (currentPosition !== mapIndex(startPosition)) {
    for (let i = 0; i < predecessorArray.length; i++) {
      if (predecessorArray[i][1] === currentPosition) {
        console.log(predecessorArray[i]);

        traceArray.push(predecessorArray[i][0]);
        console.log(traceArray);
        currentPosition = predecessorArray[i][0];
      }
    }
  }

  const tempArray = traceArray.reverse();
  const finalPathArray = tempArray.map(getIndex);
  console.log(finalPathArray);


let startPosition = [0, 0];
let finalPosition = [5, 7];
const queueArray = [mapIndex(startPosition)];
const visitedArray = [mapIndex(startPosition)];
const predecessorArray = [];
findShortestPath(visitedArray, queueArray, predecessorArray, finalPosition);

tracePath(predecessorArray, finalPosition, startPosition);
