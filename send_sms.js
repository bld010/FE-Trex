const accountSid = 'AC69ebfb33440925604e87b33063eb4c25';
const authToken = '7f7a00523c8b4985e970454d8adcdf77';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14439687038',
     to: '+15702941568'
   })
  .then(message => console.log(message.sid));