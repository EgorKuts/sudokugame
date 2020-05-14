var board = [];
var columns = [];
var boxes = [];
var rows = [];
const N = 9;
var globI = 0;
var globJ = 0;
var initialized = 0;



function init() {
      for(var i = 0; i < N; i++) {
        board.push([]);
        rows.push([]);
        boxes.push([]);
        columns.push([]);
        for(var j = 0; j < N; j++) {
          board[i].push(0);
          rows[i].push(false);
          boxes[i].push(false);
          columns[i].push(false);
        }
      }
      initialized = 1;
}

// [val - 1] = true
// 0..8
// (0,0) (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2,0), (2, 1), (2,2)
function eraseValue(i, j) {
  var prevValue = board[i][j];
  if(prevValue == 0) {
    return;
  }
  board[i][j] = 0;
  rows[i][prevValue - 1] = false;
  columns[j][prevValue - 1] = false;
  var box = map(i, j);
  boxes[box][prevValue - 1] = false;
}

function generateBoard() {
    init();
    buildSudoku();
    for(var i = 0; i < N; i++) {
      var numberToErase = between(0, N - 1);
      for(var num = 0; num < numberToErase; num++) {
        var j = between(0, N - 1);
        eraseValue(i, j);
      }
    }
}

function findNext() {
  var i = globI;
  var j = globJ;
  for(; i < N; i++) {
    for(; j < N; j++) {
      if(board[i][j] == 0) {
        return [i, j];
      }
    }
    j = 0;
  }
  return [];
}
//
// //0, .. 8
// //maps i, j to corresponding box number
function map(i, j) {
  return Math.floor(i / 3) * 3 + Math.floor(j / 3);
}

function constructSudoku() {
  globI = 0;
  globJ = 0;
  var res = buildSudoku();
  globI = 0;
  globJ = 0;
  return res;
}

function buildSudoku() {
  var next = findNext.call();
  if(next.length == 0) {
    return true;
  }
  var i = next[0];
  var j = next[1];
  var box = boxes[map(i, j)];
  var column = columns[j];
  var row = rows[i];
  for(var val = 1; val <= N; val++) {
    var a = column[val - 1];
    a = row[val - 1];
    a = box[val - 1]
    if(! (column[val - 1] || row[val - 1] || box[val - 1])) {
      column[val - 1] = true;
      row[val - 1] = true;
      box[val - 1] = true;
      board[i][j] = val;
      globI = i;
      globJ = j;
      if(buildSudoku()) {
        return true;
      } else {
        column[val - 1] = false;
        row[val - 1] = false;
        box[val - 1] = false;
        board[i][j] = 0;
        globI = i;
        globJ = j;
      }
    }
  }
  return false;
}

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

generateBoard();
console.log(board);
constructSudoku();
console.log(board);

// buildSudoku();
// console.log("i = " + (initialized++) + board);


// .call();
// console.log(board);
