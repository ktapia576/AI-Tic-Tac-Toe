let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

let w;
let h;

let bot = 'X';
let human = 'O';
let currentPlayer = bot;

function setup() {
    createCanvas(400, 400);
  
    w = width / 3;  // get width divided into three parts
    h = height / 3;  // get height divided into three parts
  
    randomMove();
}

function randomMove() {
  if (currentPlayer == bot) {
    // Only when bot's turn
    let valid = false; 
    
    while(!valid){
      let row = Math.floor(Math.random() * 3); // returns a random integer from 0 to 2 
      let col = Math.floor(Math.random() * 3);
      
      // If turn is valid (space not filled)
      if (board[row][col] == '') {
        board[row][col] = bot;
        currentPlayer = human;
        valid = true;  // set true to break out of loop
      }
    }
  }
}

function mouseClicked() {
  if (currentPlayer == human) {
    // Only when human's turn is up
    let row = Math.floor(mouseY/h);  // Divide the mouse position in y axis by h and apply floor to get col index in array
    let col = Math.floor(mouseX/w);  // Divide the mouse position in x axis by w and apply floor to get row index in array
    
    console.log(`row: ${row} col: ${col}`);
    
    // If turn is valid (space not filled) and the user didnt click outside canvas
    if (row < 3 && col < 3 && board[row][col] == '') {
      board[row][col] = human;
      currentPlayer = bot;
      randomMove();
    }
  }
}
  
function draw() {
    background(255);
 
    // Create grid lines for tic tac toe
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
  
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // *(0,0) starts at top right corner of canvas*
            let x = w * j + w/2;  // move x pointer based off of col number. Lastly, add half of w to move pointer center
            let y = h * i + h/2;  // move y pointer based off of row number Lastly, add half of h to move pointer center
            
            let mark = board[i][j];
            strokeWeight(4);
            if (mark == "X") {
              let r = w/4;  // divide into 4 parts and use for creating the lines
              line(x - r, y - r, x + r, y + r);  // move pointer to make line using xr (x1,y1,x2,y2) 
              line(x + r, y - r, x - r, y + r);
            } else if (mark == "O") {
              noFill();
              ellipse(x,y,w/1.6);
            }
        }
    }
}