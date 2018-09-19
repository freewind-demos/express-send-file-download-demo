const express = require('express')
const app = express()

app.use(express.static('./'))

app.get('/download', function (req, res) {
    const file = __dirname + '/data.txt'
    res.download(file)
})

app.listen(3000, function () {
    console.log('Listening on 3000')
})
