const express = require('express');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// Connect Mongoose
mongoose.connect(process.env.MONGODB_URL).then(console.log("Connect to MongoDB")).catch((err) => console.log(err));
  
// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //useCreateIndex: true,
// })
// .then(console.log("Connect to MongoDB"))
// .catch((err) => console.log(err));


app.use('/kawsar', (req, res) => {
    console.log('Hey this is Kawsar url');
})

app.listen("5000", () => {
  console.log("Server is Running...")
})