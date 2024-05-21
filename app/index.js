const express = require('express')
const app = express()
const port = 8000


app.get('/emps', (req, res) => {
    res.json({uzenet : 'Expressben programozok'})
    console.log('bruh')
})

app.listen(port, () => {
    console.log(`fut (localhost:${port})`)
})