$(document).ready(function () {

  // }

  // TODO
  //Global Variables

  var wins = 0
  var losses = 0
  var shardnumber = 0
  var pieceNumber = 0
  var num = 0
  var shard1 = 0
  var shard2 = 0
  var shard3 = 0
  var shard4 = 0

  var yourScore = 0

  var gameOver = false
  var playAgain = ('Would you like to play again?')
  // Click function on the shard pieces
  //$('.shardPieces').on(click, function(){

  //Function to assign a random number between 19 - 120 to the number
  function genShardNum() {
    for (var i = 0; i < 1; i++) {
      var shardRan = Math.floor(Math.random() * 101) + 19;
      shardnumber = shardnumber + shardRan;
    }
  }

  //Function to generate a random number between 1 -12 to each of the 4 shards
  function genPieceNum1() {
    pieceRan1 = Math.floor(Math.random() * 11) + 1;
    shard1 = shard1 + pieceRan1;
    $('.shard1').attr('value', shard1)
    console.log(shard1)
  }
  function genPieceNum2() {
    for (var i = 0; i < 1; i++) {
      pieceRan2 = Math.floor(Math.random() * 11) + 1;
      shard2 = shard2 + pieceRan2;
      $('.shard2').attr('value', shard2)
      console.log(shard2)
    }
  }
  function genPieceNum3() {
    for (var i = 0; i < 1; i++) {
      pieceRan3 = Math.floor(Math.random() * 11) + 1;
      shard3 = shard3 + pieceRan3;
      $('.shard3').attr('value', shard3)
      console.log(shard3)
    }
  }
  function genPieceNum4() {
    for (var i = 0; i < 1; i++) {
      pieceRan4 = Math.floor(Math.random() * 11) + 1;
      shard4 = shard4 + pieceRan4;
      $('.shard4').attr('value', shard4)
      console.log(shard4)
    }
  }

  function gathering() {
    if (yourScore == shardnumber) {
      setTimeout(function () {
        gameOver=true;
        wins++;
        $('#wins').text('Wins: ' + wins);
        alert("You have won")
        endGame()
      }, 100)

    }
    if (yourScore > shardnumber) {
      setTimeout(function () {
        gameOver=true;
        alert("You have lost");
        losses++;
        $('#losses').text('Losses: ' + losses);
        endGame()
      }, 100)
    }
  }
  //Assign the random number to the 4 shards
  $('.shardPieces').on('click', '.shard1', function () {
    var one = ($(this).attr('value'));
    var oneNum = parseInt(one);
    yourScore = oneNum + yourScore;
    $('#userNumber').text(yourScore);
    gathering()
    console.log(yourScore);
  })
  $('.shardPieces').on('click', '.shard2', function () {
    var two = ($(this).attr('value'));
    var twoNum = parseInt(two);
    yourScore = twoNum + yourScore;
    $('#userNumber').text(yourScore);
    gathering()
    console.log(yourScore);
  })
  $('.shardPieces').on('click', '.shard3', function () {
    var three = ($(this).attr('value'))
    var threeNum = parseInt(three);
    yourScore = threeNum + yourScore;
    $('#userNumber').text(yourScore);
    gathering()
    console.log(yourScore);
  })
  $('.shardPieces').on('click', '.shard4', function () {
    var four = ($(this).attr('value'))
    var fourNum = parseInt(four);
    yourScore = fourNum + yourScore;
    $('#userNumber').text(yourScore);
    gathering()
    console.log(yourScore);
  })

  //function End Game
  function endGame() {
    var userResponse = confirm(playAgain)
    if (userResponse == true) {
      yourScore = 0;
      $('userNumber').text(yourScore)
      StartGame()
    }
    else {
      alert('Thank you for playing!')
      return;
    }
  }

  //START GAME
  function StartGame() {
    pieceNumber = 0;
    shardnumber = 0;
    yourScore = 0;
    $('userNumber').text(yourScore)
    shard1 = 0
    shard2 = 0
    shard3 = 0
    shard4 = 0
    genShardNum()
    genPieceNum1()
    genPieceNum2()
    genPieceNum3()
    genPieceNum4()
    $('#shardNumber').text(shardnumber)
    gathering()
  };


  //Start the Game
  $('.titleScreen').on('click', StartGame);


});
//GAME LOGIC


// $('.titleScreen').on('click',  function gameStart () {


//When the shard is clicked, whatever random number was generated will be added together

//Click the shards to get the number to match the assigned number

//If win condition is met, add 1 to wins, if loss, add 1 to loss

//Global Variables


// $.fn.center = function () {
//     this.css("position","absolute");
//     this.css("top", Math.max(0, (
//       ($(window).height() - $(this).outerHeight()) / 2) + 
//        $(window).scrollTop()) + "px"
//     );
//     this.css("left", Math.max(0, (
//       ($(window).width() - $(this).outerWidth()) / 2) + 
//        $(window).scrollLeft()) + "px"
//     );
//     return this;
//   }

//   $("#overlay").show();
//   $("#overlay-content").show().center();

//   setTimeout(function(){    
//     $("#overlay").fadeOut();
//   }, 3000);

//start game function
