const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const users = [
    {
        name: 'Test User',
        email: 'test@gmail.com',
        password: '123456'
    }
]

app.get('/', (req, res) => {
    res.send('CERO backend is running')
})

app.post('/login', (req, res) => {

    const { email, password } = req.body

    const user = users.find((user) => {
        return user.email === email && user.password === password
    })

    if (user) {
        res.json({
            success: true,
            message: 'Login successful'
        })
    } else {
        res.json({
            success: false,
            message: 'Invalid email or password'
        })
    }

})

app.post('/signup', (req, res) => {

    const { name, email, password } = req.body

    users.push({
        name: name,
        email: email,
        password: password
    })

    res.json({
        success: true,
        message: 'Account created successfully'
    })

})

app.listen(5000, () => {
    console.log('Server running on port 5000')
})