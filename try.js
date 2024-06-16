// const express = require('express')
// const app = express()
// const route = require('./routes/newRoute')
// const mongoose = require('mongoose')
// const Blog = require('./model/product')

// const port = 3000


// const dbURI = "mongodb://0.0.0.0:27017/Blogs"
// mongoose.connect(dbURI, { 
//     useNewUrlParser: true
// }, {
//     useUnifiedTopology: true
// })
// .then((result) => {
//     console.log('connected to db')
// })
// .catch((err) => {
//     console.log(err)
// })

// app.set('view engine', 'ejs')
// app.set('views', 'view')


// app.use(route)

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new title',
//         snippet: 'about mu new blog',
//         body: 'more about my blog..'
//     })

//     blog.save()
//     .then((result)=> {
//         console.log(result)
//         res.send(result)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })
// })


// app.listen(port, (err, data) => {
//     if(err) throw err
//     else console.log(`you are running on port ${port}`)
// })

// const fs = require('fs')
// const os = require('os')
// console.log(os.platform(), os.homedir())

// read files

// fs.readFile('./controller/test.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// write files

// fs.writeFile('./controller/test1.txt', 'hello ninja', () => {
//     console.log('file was written')
// })

// make directory

// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err, data) => {
//         if(err){ 
//             console.log(err)
//         }
//         console.log('directory has been created')
//     })
// } else
// fs.rmdir('./assets', (err, data) => {
//     if(err){ 
//         console.log(err)
//     }
//     console.log('directory has been deleted')
// })


// delete files

// setTimeout(() => {
//     console.log('in the timeOut')
//     clearInterval(int)
// }, 3000)

// const int = setInterval(() => {
//     console.log('in the interval')
// }, 1000)

// console.log(__dirname)
// console.log(__filename)

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    //set header content type
    // res.setHeader('content-Type', 'text/plain')

    // res.write('hello guys')

    // res.setHeader('content-Type', 'text/html')

    // res.write('<h1>hello guys</h1>')

    // res.end()

    // res.setHeader('content-Type', 'text/html')

    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<h1>hello guys</h1>')
    // res.write('<h1>hello ninjas</h1>')
    
    // res.end()

    res.setHeader('content-Type', 'text/html')

    let path = './views/'
    switch(req.url) {
        case '/':
        path += 'index.html'
        res.statusCode = 200
        break;

        case '/about':
        path += 'about.html'
        res.statusCode = 200
        break; 
        
        case '/jklm':
        res.statusCode = 301
        res.setHeader('Location', '/')
        res.end()
        break;

        default:
            path += '404.html'
            res.statusCode = 404
        break;
    }
    
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
        }
        else{
            // res.write(data)
            res.end(data)
        }
    })



})

server.listen(3000, 'localhost',() => {
    console.log('listening for requests on port 3000')
})