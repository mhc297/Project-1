$(function(){

var board = $('#board');
var car = $('.car');
var carHeight = parseInt(car.css('top'));
var carWidth = parseInt(car.css('right'));
var player1 = $('#player1')
// var player2 = $('#player2')
var speed = 10;
var gameOver = false;


var obstacle = $('.obstacle');
var obstacle_1 = $('#obstacle_1');
var obstacle_2 = $('#obstacle_2');
var obstacle_3 = $('#obstacle_3');
var obstacle_4 = $('#obstacle_4');
var obstacle_5 = $('#obstacle_5');
var obstacle_6 = $('#obstacle_6');

var boardHeight = parseInt(board.height());
var boardWidth = parseInt(board.width());
var obstacleInitialPostion = parseInt(obstacle.css('top'));
// var obstacleCurrentPosition = parseInt(obstacle.css('top'));

var startGame = setInterval (function(){
  // this will update the obstacle's current position every 50ms
  obstacleCurrentPosition = parseInt(obstacle.css('top'));
  console.log(obstacleCurrentPosition);

  // when current > 700px, current resets to a random height;
  if(obstacleCurrentPosition > boardHeight) {
    obstacleCurrentPosition = obstacleInitialPostion;
    obstacle.css('top', nextObstacleHeight(-200, -500));

  } else{
    obstacle.css('top', obstacleCurrentPosition + speed);
  }

  if (parseInt(car.css('top')) <= 0 || parseInt(car.css('top')) > parseInt(board.height() - 100)){
  gameOver = true;
  clearInterval();
  }

  if (gameOver === true){
  console.log('Game Over')};

  nextObstacleHeight = function (min, max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
  }

}, 50);

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


// function collision($div1, $div2){
//   var x1 = $div1.offset().left;
//   var y1 = $div1.offset().top;
//   var h1 = $div1.outerHeight(true);
//   var w1 = $div1.outerWidth(true);
//   var b1 = y1 + h1;
//   var r1 = x1 + w1;
//   var x2 = $div2.offset().left;
//   var y2 = $div2.offset().top;
//   var h2 = $div2.outerHeight(true);
//   var w2 = $div2.outerWidth(true);
//   var b2 = y2 + h2;
//   var r2 = x2 + w2;

//   if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
//   return true;
// }

// if (car.right > obstacle.left && car.left < obstacle.right && car.top < obstacle.bottom && car.bottom > obstacle.top {
//   return false;
// }

// // resets the obstacles to random heights when each leaves the bottom of the game area

