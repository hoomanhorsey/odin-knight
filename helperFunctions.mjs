function mapIndex(coords) {
  return coords[0] + 8 * coords[1];
}

function getIndex(index) {
  let x = index % 8;
  let y = Math.floor(index / 8);
  return [x, y];
}

function createMatrix() {
  // declare boardArray for adjacency matrix
  const boardArray = [];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      // call calcLegalMove to create subArray of legal moves for each position
      boardArray.push(calcLegalMoves(y, x));
    }
  }
  return boardArray;
}

function calcLegalMoves(y, x) {
  const tempArray = [];

  // East North
  if (y + 1 > 7 || x + 2 > 7) {
  } else {
    tempArray.push([x + 2, y + 1]);
  }
  if (y - 1 < 0 || x + 2 > 7) {
  } else {
    tempArray.push([x + 2, y - 1]);
  }
  //   West North
  if (y + 1 > 7 || x - 2 < 0) {
  } else {
    tempArray.push([x - 2, y + 1]);
  }
  //   West South
  if (y - 1 < 0 || x - 2 < 0) {
  } else {
    tempArray.push([x - 2, y - 1]);
  }
  //   North West
  if (y + 2 > 7 || x - 1 < 0) {
  } else {
    tempArray.push([x - 1, y + 2]);
  }
  //   North East
  if (y + 2 > 7 || x + 1 > 7) {
  } else {
    tempArray.push([x + 1, y + 2]);
  }
  //   South West
  if (y - 2 < 0 || x - 1 < 0) {
  } else {
    tempArray.push([x - 1, y - 2]);
  }
  //   South East
  if (y - 2 < 0 || x + 1 > 7) {
  } else {
    tempArray.push([x + 1, y - 2]);
  }
  // console.log(tempArray);
  return tempArray;
}

export { createMatrix, mapIndex, getIndex };
