$(function(){

var board = $('#board');
var car = $('.car');
var gameOver = false;
var gamePaused = false;
var pauseButton = $('pauseButton')
var restartButton = $('restartButton')

var obstacle = $('.obstacle');
var speed = 10;
var score = 0;
var obstacleRightDefault;

var boardHeight = parseInt(board.height());
var boardWidth = parseInt(board.width());
var carHeight = parseInt(car.height());
var carWidth = parseInt(car.width());
var obstacleInitialPostion = parseInt(obstacle.css('top'));
var obstacleInitialWidth = parseInt(obstacle.css('right'));


var startGame = setInterval (function(){


  obstacleCurrentPosition = parseInt(obstacle.css('top'));
  obstacleCurrentWidth = parseInt(obstacle.css('right'));

  if(obstacleCurrentPosition > boardHeight){
    obstacleCurrentPosition = obstacleInitialPostion;
    obstacle.css('top', randomizeObstacle(-100, -300));
    obstacle.css('right', randomizeObstacle(0, 500));
    speed = randomizeObstacle(9,13);
    obstacle.each(function(){
      var startPosition = randomizeObstacle(-100, -700);
      $(this).css('top',startPosition+'px');
      $(this).css('right', randomizeObstacle(0, 500))
    });

  } else{
    obstacle.each(function() {
      var currentPos = parseInt($(this).css('top'));
      $(this).css('top', currentPos + speed + 'px');
    });
    // obstacle.css('top', obstacleCurrentPosition + speed);

    console.log(Math.abs($('.obstacle').offset().left))
  }


  // Collision detection
  // for (var i = 0; i < obstacle.length; i++){
  //   if (Math.abs(($('.obstacle[i]').offset().top) - ($('.car').offset().top)) < carHeight && (Math.abs(($('.obstacle[i]').offset().left) - ($('.car').offset().left)) < carWidth)){
  //   gameOver = true;
  //   }
  // };

  if (Math.abs(($('#obstacle_1').offset().top) - ($('.car').offset().top)) < carHeight && (Math.abs(($('#obstacle_1').offset().left) - ($('.car').offset().left)) < carWidth)){
    gameOver = true;
  } if (Math.abs(($('#obstacle_2').offset().top) - ($('.car').offset().top)) < carHeight && (Math.abs(($('#obstacle_2').offset().left) - ($('.car').offset().left)) < carWidth)){
    gameOver = true;
  } if (Math.abs(($('#obstacle_3').offset().top) - ($('.car').offset().top)) < carHeight && (Math.abs(($('#obstacle_3').offset().left) - ($('.car').offset().left)) < carWidth)){
    gameOver = true;
  } if (Math.abs(($('#obstacle_4').offset().top) - ($('.car').offset().top)) < carHeight && (Math.abs(($('#obstacle_4').offset().left) - ($('.car').offset().left)) < carWidth)){
    gameOver = true;
  } if (Math.abs(($('#obstacle_5').offset().top) - ($('.car').offset().top)) < carHeight && (Math.abs(($('#obstacle_5').offset().left) - ($('.car').offset().left)) < carWidth)){
    gameOver = true;
  } if (Math.abs(($('#obstacle_6').offset().top) - ($('.car').offset().top)) < carHeight && (Math.abs(($('#obstacle_6').offset().left) - ($('.car').offset().left)) < carWidth)){
    gameOver = true;
  }




  // Ends the game if the player steers into any of the walls
  if (parseInt(car.css('top')) <= 0 || parseInt(car.css('top')) >= boardHeight - carHeight || parseInt(car.css('right')) <= 0 || parseInt(car.css('right')) >= boardWidth - carWidth){
    gameOver = true;
  }

  // 'Game over' conditions - clears the game interval, fires an alert message, ends the background road animation and displays the user's score
  if (gameOver === true){
    clearInterval(startGame);
    console.log('Game Over');
    $('#board').css("animation", "none");
    // event.off;
    };

  $('#pause-button').click(function(){
    gamePaused = true;
  });

  if (gamePaused === true){
    clearInterval(startGame);
    console.log('Game Paused');
    $('#board').css("animation", "none");
    var scoreStored;

    // scoreStored = score.innerHTML;
  }
}, 50);

// My math.random function that is pulled above to randomize the obstacles' start width, start height and velocity
randomizeObstacle = function (min, max){
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}



// Player car movement inputs
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
    parseInt(car.animate({'margin-left': '-=15'}, 50))
  }

  function moveRight(){
    // console.log ('39 pressed');
    parseInt(car.animate({'margin-left': '+=15'}, 50));
  }

  function moveUp(){
    // console.log ('87 pressed');
    parseInt(car.animate({'margin-bottom': '+=15'}, 50));
  }

  function moveDown(){
    // console.log ('83 pressed');
    parseInt(car.animate({'margin-bottom': '-=15'}, 50));
    }
  })


});

    // $('#pause-button').click(function(){
    // gamePaused = false;

    // if (gamePaused === false){
    //   setInterval(startGame, 50);
    // }
    // });



// sets the obstacle's position
// checks if the obstacle is still contained within the height
// sets the current position equal to where it was starting the game to return the div
// moves the divs from top to bottom

// function(resumeGame){
//   startGame();
//   score = scoreStored;
// }




