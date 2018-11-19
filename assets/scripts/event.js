'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
const copyNewGameData = data => {
  store.game = data.game
}

const onSignUp = event => {
  console.log('in onSignUp')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = event => {
  console.log('in onChangePassword')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignIn = event => {
  console.log('in onSignIn')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const onSignOut = event => {
  console.log('out onLogOut')
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onBeginGame = event => {
  console.log('in onBeginGame')
  event.preventDefault()
  api.beginGame()
    .then(copyNewGameData)
}

const onRestartGame = event => {
  console.log('ionRestartGame')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
}
const onEndGame = event => {
  console.log('onEndGame')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
}
const onLogOut = event => {
  console.log('onLogOut')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onBeginGame,
  onRestartGame,
  onEndGame,
  onLogOut
}

// $('#sign-up').on('submit', event.onSignUp)
// $('#sign-up').on('submit', event.onSignUp)
// $('#sign-out').on('submit', event.onSign)
// $('#change-password').on('submit', event.changePassword)
// $('#begin-game').on('submit', event.onBeginGame)
// $('#restart-game').on('submit', event.onRestartGame)
// $('#end-game').on('submit', event.onEndGame)
// $('#log-out').on('submit', event.onLogOut)
