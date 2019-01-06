'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
const copyNewGameData = data => {
  console.log('inside copyNewGameData', data)
  store.game = data.game
}

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $(event.target).trigger('reset')
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(onRestartGame)
    // .then(copyNewGameData)
    .catch(ui.signUpFailure)
}

const onSignOut = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signOut(data)
    .then(ui.signOut)
    .catch(ui.signOutFailure)
}

const onRestartGame = () => {
  api.createGameAPI()
    .then(ui.createGameSuccess)
}

//onUpdate game event -- send to api with box id and player move
const onUpdateGame = (boxId, currentTurn) => {
const dataObj = {
  "game": {
    "cell": {
      "index": boxId,
      "value": currentTurn
    },
    "over": false
  }
}

  api.updateGameAPI(dataObj)
  .then((data) => console.log ('after patch, array on API is', data.game.cells))
  .catch(console.error)

}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onRestartGame,
  onUpdateGame
}

// $('#sign-up').on('submit', event.onSignUp)
// $('#sign-up').on('submit', event.onSignUp)
// $('#sign-out').on('submit', event.onSign)
// $('#change-password').on('submit', event.changePassword)
// $('#begin-game').on('submit', event.onBeginGame)
// $('#restart-game').on('submit', event.onRestartGame)
// $('#end-game').on('submit', event.onEndGame)
// $('#log-out').on('submit', event.onLogOut)
