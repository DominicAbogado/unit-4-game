// $(document).ready(function () {

// }

// TODO

//START GAME
//Function to assign a random number between 19 - 120 to the number

//Function to generate a random number between 1 -12 to each of the 4 shards

//When the shard is clicked, whatever random number was generated will be added together

//Click the shards to get the number to match the assigned number

//If win condition is met, add 1 to wins, if loss, add 1 to loss

//Global Variables

var wins = 0
var losses = 0

$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (
      ($(window).height() - $(this).outerHeight()) / 2) + 
       $(window).scrollTop()) + "px"
    );
    this.css("left", Math.max(0, (
      ($(window).width() - $(this).outerWidth()) / 2) + 
       $(window).scrollLeft()) + "px"
    );
    return this;
  }
  
  $("#overlay").show();
  $("#overlay-content").show().center();
  
  setTimeout(function(){    
    $("#overlay").fadeOut();
  }, 3000);

//start game function
