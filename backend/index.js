const express = require('express');

const app = express();

app.use('/lama', (req, res) => {
    console.log('Hey this is lama url');
})

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:5000`)
})