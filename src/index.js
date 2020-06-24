const express    = require('express')
const bodyParser = require('body-parser')
const router     = require('./routes')
const cors       = require('cors')
const app        = express()

const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(port,() => {
	console.log(`ruanning port ${port}`)
})