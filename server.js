//require express & initialize app:

const app = require('express')();

//require cors middleware:

const cors = require('cors');

//require dotenv:
require('dotenv').config();

//require pg and set to Client;
const { Client } = require('pg')
const PORT = 5001; //Active port

app.use(cors()); //Connect Express to Cors middleware

app.get('/', async (req,res)=>{ //Listen for get request
  const client = new Client() //New instance
  await client.connect() //Connect to DB
  const data = await client.query('SELECT * from devices;') //Data stored in variable
  res.send(data.rows); //Send data to client
  await client.end() //Close connection
})

app.listen(PORT, ()=>{ //Activate port
  console.log("listening to port: " + PORT); //Print port connection
})
