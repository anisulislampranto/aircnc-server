const express = require('express')
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config()


const port = process.env.PORT || 4040


app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})