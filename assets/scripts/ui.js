const store = require('./store.js')

const signUpSuccess = data => {
  $('.sign-up-message').html('<p class="blue">Sign Up Successful!</p>')
  $('#sign-up')[0].reset()
  // console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = error => {
  $('.sign-up-message').html('<p class="red">Sign Up NOT Successful!</p>')
  $('#sign-up')[0].reset()
  // console.log('signUpFailure ran. Error is:', error)
}
const signInSuccess = data => {
  $('.sign-in-message').html('<p class="blue">Sign In Successful!</p>')
  $('#sign-in')[0].reset()
  $('#signUpModal').hide()
  $('#show').show()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#sign-out-button').show()
  $('#change-password-button').show()
  $('#restart-button').show()
  store.user = data.user
  // console.log('signInSuccess ran. Data is:', data)
}

const signInFailure = error => {
  $('.sign-in-message').html('<p class="red">Sign In Unsuccessful</p>')
  $('#sign-in')[0].reset()
  // console.log('signInFailure ran. Error is:', error)
}
const changePasswordSuccess = data => {
  $('.sign-in-message').html('<p class="blue">Sign In Successful!</p>')
  $('#changePasswordModal')[0].reset()
  store.user = data.user
  // console.log('changePasswordSuccess ran. Data is:', data)
}

const changePasswordFailure = error => {
  $('.change-password-message').html('<p class="red">Change Password Unsuccessful</p>')
  $('#changePasswordModal')[0].reset()
}

const signOut = data => {
  $('.sign-out-message').html('Sign Out Successful!')
  $('#sign-out')[0].reset()
  $('#show').hide()
  $('#sign-in-button').show()
  $('#sign-up-button').show()
  $('#sign-out-button').hide()
  $('#change-password-button').hide()
  $('#restart-button').hide()
}

const restartGame = data => {
  // console.log(data)
  // console.log('your being reached here')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOut,
  restartGame
}
