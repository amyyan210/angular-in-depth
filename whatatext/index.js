const express = require('express')
const signalR = require("@aspnet/signalr");
var bodyParser = require('body-parser');
var cors = require('cors');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var WebSocket = require('websocket').w3cwebsocket;

const app = express();
const port = 3000;
var deviceId;
var authToken;
var connection;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/order', (req, res) => res.json({ 
    deviceId: deviceId, authToken: authToken 
}));
app.post('/order', (req, res) => {
    deviceId = req.body.deviceId;
    authToken = req.body.authToken;

    let url = 'https://wbmobiledv.azurewebsites.net/hub' +
    '?token=' + authToken + '&deviceId=' + deviceId;

    connection = new signalR.HubConnectionBuilder()
    .withUrl(url)
    .build();
 
    connection.on('ShowNotification', (data) => {
        console.log(data);
    });

    connection.start().then(() => {
        console.log('Hub connection started');
      })
      .catch(err => {
        console.log(err);
      });

    res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 


