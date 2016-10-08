$(function(){

var board = $('#board');
var car = $('.car');
var gameOver = false;
var gamePaused = false;
var pauseButton = $('pauseButton')

var obstacle = $('.obstacle');
var speed = 10;
var score = 0;
var scoreBoard = $('#score');
var obstacleRightDefault;

var boardHeight = parseInt(board.height());
var boardWidth = parseInt(board.width());
var carHeight = parseInt(car.height());
var carWidth = parseInt(car.width());
var obstacleInitialPostion = parseInt(obstacle.css('top'));
var obstacleInitialWidth = parseInt(obstacle.css('right'));
 // var obstacleCurrentWidth = parseInt(obstacle.css('right'));


var startGame = setInterval (function(){
  obstacleCurrentPosition = parseInt(obstacle.css('top'));

  if(obstacleCurrentPosition > (1.4 * (boardHeight))){
    obstacle.each(function(){
      obstacleCurrentPosition = obstacleInitialPostion;
      var startPosition = randomizeObstacle(-300, -700);
      $(this).css('top', startPosition);
      $(this).css('right', randomizeObstacle(0, 500));
      $(this).css('margin', randomizeObstacle (25, 50));
      speed = randomizeObstacle(10,13);
      score++;
      console.log(score);
      scoreBoard.text(score);
    });
  } else{
    obstacle.each(function() {
      var obstacleNewPosition = parseInt($(this).css('top'));
      $(this).css('top', obstacleNewPosition + speed);
    });
  }

  // Collision detection - I was unable to get the following loop to work consistently so had to rewrite the code for each individual obstacle element

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
  if (parseInt(car.css('top')) <= -2 || parseInt(car.css('top')) >= boardHeight - carHeight || parseInt(car.css('right')) <= -2 || parseInt(car.css('right')) >= boardWidth - carWidth){
    gameOver = true;
  }

  // 'Game over' conditions - clears the game interval, fires an alert message, ends the background road animation, displays the user's score & disables the player car movement
  if (gameOver === true){
    clearInterval(startGame);
    console.log('Game Over! Your score is ' + score);
    $('#board').css("animation", "none");
    $(document).off('keydown')
    };

  $('#pause-button').click(function(){
    gamePaused = true;
  });

  if (gamePaused === true){
    clearInterval(startGame);
    console.log('Game Paused');
    $('#board').css("animation", "none");
    $(document).off('keydown');
  }

}, 50);

// The math.random function that is pulled above to randomize the obstacles' start width, start height and velocity
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
    parseInt(car.animate({'margin-left': '-=10'}, 40))
  }

  function moveRight(){
    // console.log ('39 pressed');
    parseInt(car.animate({'margin-left': '+=10'}, 40));
  }

  function moveUp(){
    // console.log ('87 pressed');
    parseInt(car.animate({'margin-bottom': '+=10'}, 40));
  }

  function moveDown(){
    // console.log ('83 pressed');
    parseInt(car.animate({'margin-bottom': '-=10'}, 40));
    }
  })

});

  // if ($('#obstacle_1').offset().top === boardHeight){
  //   score++;
  //   console.log($('#obstacle_1').offset().top)
  //   console.log(score);
  //   scoreBoard.replaceWith(score);
  // } if ($('#obstacle_2').offset().top === boardHeight){
  //   score++;
  //   console.log($('#obstacle_2').offset().top)
  //   console.log(score);
  //   scoreBoard.replaceWith(score);
  // } if ($('#obstacle_3').offset().top === boardHeight){
  //   score++;
  //   console.log($('#obstacle_3').offset().top)
  //   console.log(score);
  //   scoreBoard.replaceWith(score)
  // } if ($('#obstacle_4').offset().top === boardHeight){
  //   score++;
  //   console.log($('#obstacle_4').offset().top)
  //   console.log(score);
  //   scoreBoard.replaceWith(score)
  // } if ($('#obstacle_5').offset().top === boardHeight){
  //   score++;
  //   console.log($('#obstacle_5').offset().top)
  //   console.log(score);
  //   scoreBoard.replaceWith(score)
  // } if ($('#obstacle_6').offset().top === boardHeight){
  //   score++;
  //   console.log($('#obstacle_6').offset().top)
  //   console.log(score);
  //   scoreBoard.replaceWith(score)
  // }

// function(resumeGame){
//   startGame();
//   score = scoreStored;
// }




