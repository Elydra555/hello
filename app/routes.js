const Router = require('express')
const router = Router()


router.get('/emps', (req, res) => {
    res.json({uzenet : 'Expressben programozok xd'})
    console.log('bruh')
})

router.post('/emps', (req, res) => {
    res.json({uzenet : 'nyenyenyenye'})
    console.log('bruh')
})

router.put('/emps/:id', (req, res) => {
    res.json({uzenet : 'lulw'})
    console.log('bruh')
})

router.delete('/emps/:id', (req, res) => {
    res.json({uzenet : 'xd'})
    console.log('bruh')
})

module.exports = router