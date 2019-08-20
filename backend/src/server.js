const http = require('http');
const express = require('express');
const session = require('express-session');
const { urlencoded } = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const smsApp = express();

smsApp.use(urlencoded({ extended: false }));
smsApp.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'asdgknv823nd10243rkdv4356a',
  })
);

smsApp.post('/sms', (req, res) => {
  const smsCount = req.session.counter || 0;

  let message = 'Hello, thanks for the new message';

  if (smsCount > 0) {
    message = `Hello, thanks for message number ${smsCount + 1}`;
  }
  req.session.counter = smsCount + 1;
  console.log(req);
  // const twiml = new MessagingResponse();

  // console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
  // console.log(req.sessionID);
  // twiml.message(message);

  // res.writeHead(200, { 'Content-Type': 'text/xml' });
  // res.end(twiml.toString());
});

http.createServer(smsApp).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
