// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'TWILIO_SID';
const authToken = 'TWILIO_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is a test message from the SubMe app.',
    from: '+19312885317',
    to: '+19318089918',
  })
  .then(message => console.log(message.sid));
