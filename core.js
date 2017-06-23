let gameWidth = window.innerWidth - 100;
let gameHeight = window.innerHeight - 100;

xBall = 100;
yBall = 100;
angleBall = 1;
directionBall = 1;
yPlayer = 100;
yEnnemy = 100;


colorPlayR = 150;
colorPlayG = 120;
colorPlayB = 190;

function setup() {
  createCanvas(gameWidth, gameHeight);
  background(150,120,190);
}

function draw() {
  background(colorPlayR, colorPlayG, colorPlayB);
  drawPlayer(yPlayer);
  drawEnnemy(yEnnemy);
  drawBall(xBall, yBall);
}

function drawPlayer(pos) {
  fill(0,0,0);
  rect(30, pos, 20, 80);
}

function drawEnnemy(pos) {
  fill(0,0,0);
  rect((width - 50), pos, 20, 80);
}

function drawBall(x, y) {
  fill(0,0,0);
  rect(x, y, 20, 20);
}

function mousePressed() {
  xBall += 5;
  redraw();
}

function playing() {

  if(directionBall == 1) {
    xBall += 5;
  }
  if(directionBall == -1) {
    xBall -= 5;
  }

  if (xBall > (gameWidth - 60)) {
    if ((yEnnemy - yBall) <=10 && directionBall == 1) {
      directionBall = -1;
      colorPlayR = 150;
    } else {
      console.log("Ennemy a perdu");
      colorPlayR = 255;
    }
  }
  if (xBall < 50) {
    if ((yPlayer - yBall) <=10 && directionBall == -1) {
      directionBall = 1;
      colorPlayG = 120;
    } else {
      console.log("Player a perdu");
      colorPlayG = 255;
    }
  }


  if (yBall > (gameHeight - 20)) {
    angleBall = -1;
  }
  if (yBall < 20) {
    angleBall = 1;
  }
  yBall += 2 * angleBall;


  if ((yEnnemy - yBall) > 0 ) {
    yEnnemy -= 2;
  }
  if ((yEnnemy - yBall) < 0 ) {
    yEnnemy += 2;
  }


  setTimeout(function(){
      playing();
    }, 10);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    yPlayer -= 50;
  } else if (keyCode === DOWN_ARROW) {
    yPlayer += 50;
  }
}

playing();