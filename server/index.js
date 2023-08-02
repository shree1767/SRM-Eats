require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const mongoDB = require('./db')
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'https://srm-eats.vercel.app'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(express.json())
app.use('/api',require("./routes/loginsignup"))
app.use('/api',require("./routes/DisplayData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})