
const express = require('express')
const path = require('path')

const app = express()
const port = 3000


app.get('/', (req, res) => res.sendFile(path.join(___dirname, 'views/index.html')))
app.get('/sobre', (req, res) => res.sendFile(path.join(___dirname, 'views/sobre.html')))
