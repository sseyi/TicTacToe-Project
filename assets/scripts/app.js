'use strict'
const event = require('./event.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')



$(() => {
  $('#sign-up').on('submit', event.onSignUp)
  $('#sign-in').on('submit', event.onSignIn)
  $('#sign-out').on('submit', event.onSignOut)
  $('#change-password').on('submit', event.changePassword)
  $('#restart-game').on('submit', event.onRestartGame)


  const player1 = 'X'
  const player2 = 'O'
  // defining player role
  let moves = 0
  let currentTurn = 'X'

  let gameArray = ['', '', '', '', '', '', '', '', '']
  let gameOver = false
  const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  // determined the winningCombinations on the board

  $('.box').click(function (event) {
    moves++
    // click event: when user clicks on
    const box = $(event.target)
    // console.log(box)
    if (box.text() === '') {
      box.html(currentTurn)
      gameArray[event.currentTarget.id] = currentTurn


      winCheck()
      // when box is clicked will assign either 'X' or 'O'
      if (currentTurn === 'X') {
        currentTurn = 'O'
      } else {
        currentTurn = 'X'
      }
    } else {
      currentTurn = ''
    }
  })

  const winCheck = () => {
    const box1 = $('#0').text()
    const box2 = $('#1').text()
    const box3 = $('#2').text()
    const box4 = $('#3').text()
    const box5 = $('#4').text()
    const box6 = $('#5').text()
    const box7 = $('#6').text()
    const box8 = $('#7').text()
    const box9 = $('#8').text()

    // reset the gameBoard
    const restartGame = () => {
      $('#restart-game').click(function () {
        gameArray = ['', '', '', '', '', '', '', '', '']
        currentTurn = 0
        gameOver = false
        // console.log(currentTurn)
        $('.box').empty()
        $('.boardcontainer').show()
        // event.createGameAPI()
      })
    }

    const checkTieGame = function () {
      if (moves === 9) {
        $('.Draw').text('The Game is a Draw!')
      }
    }
    // assigning the winningCombinations for 'X' in all rows
    if (box1 === 'X' && box2 === 'X' && box3 === 'X') {
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
      // console.log('Win')
    }
    if (box4 === 'X' && box5 === 'X' && box6 === 'X') {
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
    }
    if (box7 === 'X' && box8 === 'X' && box9 === 'X') {
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
    }
    // assigning the winningCombinations for 'X' in all columns
    if (box1 === 'X' && box4 === 'X' && box7 === 'X') {
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
    }
    if (box2 === 'X' && box5 === 'X' && box8 === 'X') {
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
    }
    if (box3 === 'X' && box6 === 'X' && box9 === 'X') {
      // assign the winningCombinations for 'X' diagnally
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
    }
    if (box1 === 'X' && box5 === 'X' && box9 === 'X') {
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
    }
    if (box3 === 'X' && box5 === 'X' && box7 === 'X') {
      $('.Winner').text('Player "X" is the Winner!')
      $('.Draw').hide()
    }
    // assigning the winningCombinations for 'O' in all rows
    if (box1 === 'O' && box2 === 'O' && box3 === 'O') {
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    if (box4 === 'O' && box5 === 'O' && box6 === 'O') {
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    if (box7 === 'O' && box8 === 'O' && box9 === 'O') {
// assigning the winningCombinations for 'O' in all columns
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    if (box1 === 'O' && box4 === 'O' && box7 === 'O') {
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    if (box2 === 'O' && box5 === 'O' && box8 === 'O') {
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    if (box3 === 'O' && box6 === 'O' && box9 === 'O') {
      // assign the winningCombinations for 'O' diagnally
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    if (box1 === 'O' && box5 === 'O' && box9 === 'O') {
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    if (box3 === 'O' && box5 === 'O' && box7 === 'O') {
      $('.Winner').text('Player "O" is the Winner!')
      $('.Draw').hide()
    }
    checkTieGame()
    restartGame()
  }
})

// assigning all the boxing on the gameboard a value

// diagram of gameboard assigned #1-9
// 1 2 3
// 4 5 6
// 7 8 9
// assigning the winningCombinations for 'X' in all rows

// if move greater than 4 check winner


// function allChecked(indexes) {
//   return indexes.every(function(indexes){
//       if(board[indexes].textContent === 'X'){
//         return board[indexes];
//       }else if(board[indexes].textContent === 'O'){
//         return board[indexes]
//       }
//     })
//     //
//     // To determine if the all boxes have bin used
//     // Game should determine Winner & Loser or if  both players played a "Draw"
//   // to determine the winningCombinations based on their positions clicked
