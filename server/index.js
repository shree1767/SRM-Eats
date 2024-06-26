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
  res.setHeader("Access-Control-Allow-Origin", "https://srm-eats.vercel.app");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api',require("./routes/loginsignup"))
app.use('/api',require("./routes/DisplayData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})