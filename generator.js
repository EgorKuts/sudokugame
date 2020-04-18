var board = [];
var columns = [];
var boxes = [];
var rows = [];
const N = 9;
// var globI = 0;
// var globJ = 0;

function init() {
      for(var i = 0; i < N; i++) {
        board.push([]);
        rows.push([]);
        boxes.push([]);
        columns.push([]);
        for(var j = 0; j < N; j++) {
          board[i].push(0);
          rows[i].push(0);
          boxes[i].push(0);
          columns[i].push(0);
        }
      }

      console.log(board);
}

// function findNext() {
//   var i = globI;
//   var j = globJ;
//   for(; i < N; i++) {
//     for(; j < N; j++) {
//       if(board[i][j] == 0) {
//         return [i, j];
//       }
//     }
//     j = 0;
//   }
//   return [];
// }
//
// //0, .. 8
// //maps i, j to corresponding box number
// function map(i, j) {
//   return Math.floor(i / 3) * 3 + Math.floor(j / 3);
// }
//
// function buildSudoku() {
//   var next = findNext.call();
//   if(next.length == 0) {
//     return true;
//   }
//   var i = next[0];
//   var j = next[1];
//   var box = boxes[map.call(i, j)];
//   var column = columns[j];
//   var row = rows[i];
//   for(var val = 1; val <= N; val++) {
//     if(! (column[val - 1] || row[val - 1] || box[val - 1])) {
//       column[val - 1] = true;
//       row[val - 1] = true;
//       box[val - 1] = true;
//       board[i][j] = val;
//       globI = i;
//       globJ = j;
//       if(buildSudoku) {
//         return true;
//       } else {
//         column[val - 1] = false;
//         row[val - 1] = false;
//         box[val - 1] = false;
//         board[i][j] = 0;
//         globI = i;
//         globJ = j;
//       }
//     }
//   }
//   return false;
// }


init.call();
// buildSudoku.call();
console.log(board);
