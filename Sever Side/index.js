require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//mysql
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'test'
})

//JWT TOKEN

app.get('/posts', authToken, (req, res) => {
    res.json(posts.filter(post.username === req.user.Name))
})

app.post('/login', (req, res) => {
    //UserAuthentication

    const username = req.body.username
    const user = { name : username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
    res.json({ accessToken : accessToken })
})

function authToken (req, res, next) {
    //BEARER TOKEN
    const authHead = req.headers['authorization']
    const token = authHead && authHead.split(' ')[1]

    if (token == null ) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

// //

//Get
app.get('/get1', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        // Query Method
        connection.query('SELECT * FROM beers', (err, rows) => {
            connection.release() // Return connection to pool

            if(!err) {
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})

// GET from ID
app.get('/:ID', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
       // console.log(`Connected as ID ${connection.threadId}`)

        connection.query('SELECT * FROM beers WHERE ID = ?', [req.params.ID], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})

// DELETE
app.delete('/:ID', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        //console.log(`Connected as ID ${connection.threadId}`)

        connection.query('DELETE FROM beers WHERE ID = ?', [req.params.ID], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Data with record ID: ${[req.params.ID]} has been removed.`)
            }else{
                console.log(err)
            }
        })
    })
})

// ADD RECORD
app.post('/add', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
       console.log(req.body)

        const params = req.body

        // `beers` (`ID`, `Name`, `Price`, `Location`, `Status`) VALUES ('2', 'Diana Ross', '320', '5520 Juniper Bay Rd., Conway, South Carolina(SC), 29527', 'Active');
        connection.query('INSERT INTO users SET ?', params, (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Data record Name: ${params.username} has been successfully added.`)
            }else{
                console.log(err)
            }
        })

        console.log(req.body)
    })
})

// UPDATE RECORD
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        //console.log(`Connected as ID ${connection.threadId}`)

        const { ID, Name, Price, Location, Status } = req.body


        connection.query('UPDATE beers SET name = ?, Price = ?, Location = ?, Status = ? WHERE ID = ?', [Name, Price, Location, Status, ID], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Data record Name: ${Name} has been successfully updated.`)
            }else{
                console.log(err)
            }
        })

        console.log(req.body)
    })
})


app.listen(port, () => console.log(`Listen on port ${port}`))