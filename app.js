const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')

const app = express()

const port = 3030

//connecting to Mongo database
const dbURI = "mongodb://0.0.0.0:27017/Blogs"
mongoose.connect(dbURI, { 
    useNewUrlParser: true
}, {
    useUnifiedTopology: true
})
.then((result) => {
    app.listen(port)
    // console.log('connected to db')
})
.catch((err) => {
    console.log(err)
})

// setting views
app.set('view engine', 'ejs')
app.set('views', 'views')

// app.listen(port, (err, result) => {
//     if(err){
//         throw err;
//     } 
//     console.log(`you are running on port ${port}`)
// })



// middleweres and static files
// static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// third party middleware
app.use(morgan('dev'))
app.use(morgan('tiny'))


app.use((req, res, next) => {
    console.log('new request made.')
    console.log('host: ', req.hostname)
    console.log('path: ', req.path)
    console.log('method: ', req.method)
    next()
})

// app.use((req, res, next) => {
//     console.log('in the next middleware')
//     next()
// })

// blog routes
// app.use('/blogs', blogRoutes)
app.use(blogRoutes)

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404', { title:'404' })
})