function mapIndex(coords) {
  return coords[0] + 8 * coords[1];
}

function getIndex(index) {
  let x = index % 8;
  let y = Math.floor(index / 8);
  console.log(x, y);
  return { x, y };
}

function createMatrix(boardArray) {
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      console.log(y, x);
      const tempArray = calcLegalMoves(y, x);
      console.log(tempArray);
      boardArray.push([tempArray]);
    }
  }
  return boardArray;
}

function calcLegalMoves(y, x) {
  const tempArray = [];

  // East North
  // console.log("check: y" + y + " x: " + x);
  if (y + 1 > 7 || x + 2 > 7) {
    // console.log("yep no good");
  } else {
    tempArray.push([x + 2, y + 1]);
    // console.log("good");
  }
  // console.log("check: y" + y + " x: " + x);
  // East South
  if (y - 1 < 0 || x + 2 > 7) {
    // console.log("yep no good");
  } else {
    tempArray.push([x + 2, y - 1]);
    // console.log("good");
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
  return tempArray;
}

export { createMatrix, mapIndex, getIndex };
