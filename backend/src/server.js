const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');

const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
