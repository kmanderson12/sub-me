// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC2e3173b88e5271c068eafd17f5b4412b';
const authToken = '3e0b2c6e6a3c1f8e8b1aa08fbd469100';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is Kyle from the future. WARNING: SOMEONE POISONED THE COFFEE! Cordially, Kyle',
     from: '+19312885317',
     to: '+19318089918'
   })
  .then(message => console.log(message.sid));
