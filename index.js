const express = require('express')
const app = express()
const port = 3000

app.get('/trung', (req, res) => res.send('Hello trung!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
