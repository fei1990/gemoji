'use strict'

var fs = require('fs')
var fetch = require('node-fetch')

fetch('https://api.github.com/repos/github/gemoji/contents/db/emoji.json', {
  headers: {Accept: 'application/vnd.github.v3.raw'}
}).then((response) => {
  response.body.pipe(fs.createWriteStream('emoji.json'))
})
