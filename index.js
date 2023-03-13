// imports
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

// Env variables
require('dotenv').config();

// Twilio
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// App from express
const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Route POST /sms
app.post('/sms', (req, res) => {

  //! Send a sms
  /*  const accountSid = 'AC3ddb199da8721711e39cbd74c879e5fa';
  const authToken = 'da68a870a10b846cc3425997f94c714a';
  const client = require('twilio')(accountSid, authToken);
  
  client.messages
  .create({
    body: 'Hello from Twilio!',
    from: '+15673671902',
    to: '+573205774803'
  })
  .then(message => console.log(message.sid)); */

  //! When reciving a sms send the repl
  /*  const twiml = new MessagingResponse();
   twiml.message('Thanks for your message!');
 
   res.writeHead(200, { 'Content-Type': 'text/xml' });
   res.end(twiml.toString()); */

});

// App running in port 3000
app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log('Servidor corriendo en puerto', process.env.PORT);
});






