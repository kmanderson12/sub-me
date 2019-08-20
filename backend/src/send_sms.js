require('dotenv').config({ path: 'variables.env' });

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is a test message from the SubMe app.',
    from: '+19312885317',
    to: '+19318089918',
  })
  .then(message => console.log(message.sid));
