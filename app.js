import express from 'express'
import apiRoutes from './routes/apiRoutes.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(express.static('public'))

const dbURI =
	'mongodb+srv://node1user:together4Doma@node1.rddcihh.mongodb.net/restapi'
mongoose.connect(dbURI)
    .then(result => app.listen(3008))
    .catch(err => console.log(err))

app.set('view engine', 'ejs')


// routes
app.use('/api', apiRoutes)
app.get('/', (req, res) => res.render('home'))
app.get('/new', (req, res) => res.render('addProgrammer'))