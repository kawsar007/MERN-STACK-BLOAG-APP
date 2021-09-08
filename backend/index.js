const express = require('express');

const app = express();
app.use(express.json());
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
dotenv.config();

  
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
})
.then(console.log("Connect to MongoDB"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen("5000", () => {
  console.log("Server is Running...")
})