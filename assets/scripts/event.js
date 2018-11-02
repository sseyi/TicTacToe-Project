'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  console.log('in onSignUp')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(console.log)
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
    .catch(console.log)
}

const logOut = event => {
  console.log('out onLogOut')

  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.logOut(data)
    .then(ui.logOutSuccess)
    .catch(console.log)
}
module.exports = {
  onSignUp,
  onSignIn,
  onLogOut
}
