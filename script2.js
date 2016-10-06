$(function(){

var board = $('#board');
var car = $('.car');
var carHeight = parseInt(car.css('top'));
var carWidth = parseInt(car.css('left'));
var player1 = $('#player1')
// var player2 = $('#player2')
var level = 10;


var obstacle = $('.obstacle');
// var obstacle_1 = $('#obstacle_1');

var boardHeight = parseInt(board.height());
var boardWidth = parseInt(board.width());
var obstacleInitialPostion = parseInt(obstacle.css('top'));
var obstacleCurrentPosition = parseInt(obstacle.css('top'));

var startGame = setInterval (function(){
  // sets the obstacle's position
  var obstacleCurrentPosition = parseInt(obstacle.css('top'));
  // checks if the obstacle is still contained within the height
  if (obstacleCurrentPosition > boardHeight) {
  // sets the current position equal to where it was starting the game to return the div
  obstacleCurrentPosition = obstacleInitialPostion;
} else{
  // moves the divs from top to bottom
  obstacle.css('top', obstacleCurrentPosition + level);
}
}, 60);


$(document).on('keydown', function(event){
    var key = event.keyCode;
    if (key === 37){
      moveLeft();
    }

function moveLeft(){
    console.log ('37 pressed');
    car.css('right', parseInt(car.css('right')) + 4);
    }
  })

$(document).on('keydown', function(event){
    var key = event.keyCode;
    if (key === 39){
      moveRight();
    }

function moveRight(){
  console.log ('39 pressed');
  car.css('right', parseInt(car.css('right')) - 1);
    }
  })

$(document).on('keydown', function(event){
    var key = event.keyCode;
    if (key === 38){
      moveUp();
    }

function moveUp(){
  console.log ('38 pressed');
  car.css('top', parseInt(car.css('right')) - 1);
    }
  })

$(document).on('keydown', function(event){
    var key = event.keyCode;
    if (key === 40){
      moveDown();
    }

function moveDown(){
  console.log ('40 pressed');
  car.css('top', parseInt(car.css('right')) + 1);
    }
  })

});




// var nextObstacle = parseInt(Math.random() * 10);

// // resets the obstacles to random heights when each leaves the bottom of the game area
// var nextObstacleHeight = function (min, max){
//   min=Math.ceil(min);
//   max=Math.floor(max);
//   return Math.floor(Math.random() * (max-min)) + min;
// }
