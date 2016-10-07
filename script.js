$(function(){

var board = $('#board');
var car = $('.car');
var gameOver = false;
var gamePaused = false;
var pauseButton = $('pauseButton')
var restartButton = $('restartButton')

var obstacle = $('.obstacle');
var obstacle_1 = $('#obstacle_1');
var obstacle_2 = $('#obstacle_2');
var obstacle_3 = $('#obstacle_3');
var obstacle_4 = $('#obstacle_4');
// var obstacle_5 = $('#obstacle_5');
// var obstacle_6 = $('#obstacle_6');
var speed = 10;
var score = 0;
var obstacleRightDefault;

var boardHeight = parseInt(board.height());
var boardWidth = parseInt(board.width());
var carHeight = parseInt(car.height());
var carWidth = parseInt(car.width());
var obstacleInitialPostion = parseInt(obstacle.css('top'));
// var obstacleCurrentPosition = parseInt(obstacle.css('top'));


var startGame = setInterval (function(){
  for (var i = 0; i < obstacle.length; i++){

}

  obstacleCurrentPosition = parseInt(obstacle.css('top'));

  if(obstacleCurrentPosition > boardHeight){
    obstacleCurrentPosition = obstacleInitialPostion;
    obstacle.css('top', randomizeObstacle(-200, -500));
    obstacle.css('right', randomizeObstacle(0, 600));
    speed = randomizeObstacle(7,13);
  } else{
    obstacle.css('top', obstacleCurrentPosition + speed);
    console.log(obstacleCurrentPosition);
    // console.log(speed);
    // console.log(parseInt(car.css('right')))
  }

  if (parseInt(car.css('top')) <= 0 || parseInt(car.css('top')) >= boardHeight - carHeight || parseInt(car.css('right')) <= 0 || parseInt(car.css('right')) >= boardWidth - carWidth){
    gameOver = true;
  }

  if (gameOver === true){
    clearInterval(startGame);
    alert('Game Over')
    board.css(animation, none);
    };

}, 50);

randomizeObstacle = function (min, max){
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

$(document).on('keydown', function(event){
  var key = event.keyCode;
  if (key === 65){
    moveLeft();
  } if (key === 68){
    moveRight();
  } if (key === 87){
    moveUp();
  } if (key === 83){
    moveDown();
  }

  function moveLeft(){
    // console.log ('65 pressed');
    parseInt(car.animate({'margin-left': '-=10'}, 'fast'))
  }

  function moveRight(){
    // console.log ('39 pressed');
    parseInt(car.animate({'margin-left': '+=10'}, 'fast'));
  }

  function moveUp(){
    // console.log ('87 pressed');
    parseInt(car.animate({'margin-bottom': '+=10'}, 'fast'));
  }

  function moveDown(){
    // console.log ('83 pressed');
    parseInt(car.animate({'margin-bottom': '-=10'}, 'fast'));
    }
  })

});





// sets the obstacle's position
// checks if the obstacle is still contained within the height
// sets the current position equal to where it was starting the game to return the div
// nextObstacleHeight(1000, 1500);
// moves the divs from top to bottom

// var nextObstacle = parseInt(Math.random() * 10);

// pauseButton.click(pauseGame());
//   gamePaused = true;

// function(pauseGame){
//   var scoreStored;
//   clearInterval(startGame);
//   scoreStored = score;
// }

// function(resumeGame){
//   startGame();
//   score = scoreStored;
// }

// function collision($div1, $div2){
//   var x1 = obstacle.offset().left;
//   var y1 = obstacle.offset().top;
//   var h1 = obstacle.outerHeight(true);
//   var w1 = obstacle.outerWidth(true);
//   var b1 = y1 + h1;
//   var r1 = x1 + w1;

//   if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
//   return true;
// }

// if (car.right > obstacle.left && car.left < obstacle.right && car.top < obstacle.bottom && car.bottom > obstacle.top {
//   gameOver = true;
// }

// // resets the obstacles to random heights when each leaves the bottom of the game area


