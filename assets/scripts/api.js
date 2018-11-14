'use strict'

const config = require('../config.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const louOut = data => {
  return $.ajax({
    url: config.apiUrl + '/log-out',
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  logOut
}
