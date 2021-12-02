var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')
const dotenv = require('dotenv')



dotenv.config();

// var json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/information', async(req, res) => {
    const inputURL=req.body.url;
    const info = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${inputURL}&lang=en`, {
        method: 'POST'
      })
    try {
        const jsonInfo = await info.json();
        console.log(jsonInfo);
        res.send(jsonInfo);
      }catch (error) {
      console.log("error", error);
      }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
