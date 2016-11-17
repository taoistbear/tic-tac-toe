//******************************************************************************
//Tic-Tac-Toe P4-Treehouse Full Stack Tech Degree
//******************************************************************************
!function() {
  'use strict';
  //******************************************************************************
  // *** - DONE - *** on-load show start up screen, use tictactoe-01-start.png mockup and start.txt html snippet
  //******************************************************************************
  //CREATE A DIV TO HOLD THE START SCREEN/O WIN SCREEN/X WIN SCREEN/DRAW SCREEN
  var $startScreen = $('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header><div>');
  var $oWinScreen = $('<div class="screen screen-win screen-win-one" id="finish1"><header><h1>Tic Tac Toe</h1><p class="message">O Wins The Game!</p><a href="#" class="button">New game</a></header></div>');
  var $xWinScreen = $('<div class="screen screen-win screen-win-two" id="finish2"><header><h1>Tic Tac Toe</h1><p class="message">X Wins The Game!</p><a href="#" class="button">New game</a></header></div>');
  var $drawScreen = $('<div class="screen screen-win screen-win-tie" id="finish3"><header><h1>Tic Tac Toe</h1><p class="message">Draw! No Game Won</p><a href="#" class="button">New game</a></header></div>');
  //APPEND START SCREE TO BEGING OF BODY
  $('body').prepend($startScreen);
  //HIDE THE GAME BOARD
  $('.board').hide();
  //HELPER FUNCTION TO HIDE BOARD AND SHOW WIN SCREEN
  function winScreen(winnerScreen, screenNum) {
    $('body').prepend(winnerScreen);
    $('.board').hide()
    $('.button').click(function() {
      location.reload();
    });
  }

  //******************************************************************************
  // *** - DONE - *** start button removes the start screen and begin the game with game board, use titctactoe-02-inprogress.png mockup and board.txt html snippet
  //******************************************************************************
  //CREATE CLICK HOLDER TO HIDE START SCREEN AND SHOW BOARD
  $('#start a').on('click', function() {
    $('#start').hide();
    $('.board').show();
    //SET PLAYER 1 AS ACTIVE PLAYER TO START
    $('#player1').addClass('active');
  })

  //******************************************************************************
  //add game play for the following rules
  //  *** - DONE - *** *play alternates between X and O
  //  *** - DONE - *** *current player indicated (hint add class .active)
  //  *on hover the player symbol should appear on the square
  //  *** - DONE - *** *can only click on empty squares add class .box-filled-1 (for ) .box-filled-2 (for x)
  //  *** - DONE - *** *game ends when 3 in a row (horizontal, diagnoal, virticle) or draw
  //******************************************************************************

  //SET UP ARRAYS IN OBJECT TO HOLD WINNING COMBINATIONS
  var winCombo = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
  //SET UP COUNTER TO COUNT ALL MOVES IF REACHES 9 BEFORE A WIN THEN GAME IS DRAW
  var counter = 0;
  //KEEPOING PLAYERSELECT VARIABLES GLOBAL IN ORDER FOR ACCESS AND CHECKING
  var player1Select = [];
  var player2Select = [];
  //HOVER/MOUSEOVER BACKGROUND CHANGES TO PLAYER X OR O



  //HELPER FUNCTION TO ASSIST WITH MOUSEOVER AND MOUSEOUT
  function xOrO(backGrd1, backGrd2) {

  }

  //CREATE HELPER FUNCTION TO CHECK FOR A WIN!
  //SET UP FOR LOOP TO CHECK FOR WINNING COMBOS WITH PLAYER SELECT ARRAY
  function checkForWin(playerArray, winScreenSelection, finishSelect) {
    for ( var i = 0; i < 8; i++) {
      var hitCheck = 0;
      for (var s = 0; s < playerArray.length; s++) {
        var comoboCheck = winCombo[i];
        var selectCheck = playerArray[s];
        if (comoboCheck.indexOf(selectCheck) >= 0) {
          hitCheck += 1;
          if (hitCheck === 3) {
            winScreen(winScreenSelection, finishSelect);
          }
        }
      }
    }
  }


  //START OF GAME PLAY FUNCTION
  $('.box').click(function() {
    //SET THE PLAYER SELECTION ON CLICK WITH PREVIOUSLY DEFINED TOGGLE
    if ($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2')) {
        alert('Please Select Another Square');
        return;
    } else if ($('#player1').hasClass('active')) {
      $(this).addClass('box-filled-1');
      player1Select.push($(this).index());
      checkForWin(player1Select, $oWinScreen, '#finish1');
    } else {
      $(this).addClass('box-filled-2');
      player2Select.push($(this).index());
      checkForWin(player2Select, $xWinScreen, '#finish2');
    }

    //TOGGLE 'ACTIVE' CLASS TO DETERMINE WHO IS PLAYING
    $('.players').toggleClass('active');
    counter++;
    if (counter === 9) {
      winScreen($drawScreen, '#finish3');
    }
  })
  //SET UP HOVER LISTENER TO CHANGE BACKGROUND TO SHOW PLAYER SYMBOL
  $('.box').mouseover(function() {
    var $hoverBox = $(this);
  })

  //******************************************************************************
  // *** - DONE - *** game end: board dissapears with winner or draw screen use tictactoe-03-winner1.png and tictactoe-04-winner4.png mockups along with win.txt snippet for guidance
  //******************************************************************************

  //******************************************************************************
  // *** - DONE - *** when player pushes new game the board resets
  //******************************************************************************

  //******************************************************************************
  // *** - DONE - *** use a module pattern to wrapped JS in IIF
  //******************************************************************************

  //******************************************************************************
  //*** EXTRA CREDIT
  //*** *** ALLOW PLAYERS TO ENTER THEIR NAME AND WIN PAGE SHOULD SHOW NAME
  //******************************************************************************
}();
