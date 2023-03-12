const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Env variables
require('dotenv').config();


// App from express
const app = express();

// Public folder
const publicPath = path.resolve(__dirname, './public');


const accountSid = 'AC3ddb199da8721711e39cbd74c879e5fa';
const authToken = '40a74c14da439c86abf530f9db719d75';
const client = require('twilio')(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const message = req.body.Body;
  const phone_number = req.body.From;

  // Send a reply
  client.messages
    .create({
      body: `Hello, ${phone_number}! Thanks for your message.`,
      from: 'your_twilio_number',
      to: phone_number
    })
    .then(message => console.log(message.sid));

  res.end();
});

/* client.messages
  .create({
    body: 'Hello from Twilio!',
    from: '+15673671902',
    to: '+573205774803'
  })
  .then(message => console.log(message.sid)); */


app.use(express.static(publicPath));

// App running in port 3000
app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log('Servidor corriendo en puerto', process.env.PORT);
});


