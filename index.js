const connectToMongo = require('./db');
var cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const port = process.env.PORT || 5000

app.use(express.json())


//routs
app.use('/api/pro', require('./routs/apis'))

app.listen(port, () => {
  console.log(`server port ${port}`)
})

connectToMongo();
