const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.get('', (req,res) => {
    res.render('index',{
        title : "Weather app",
        name : 'Bharat app'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title: 'About page',
        name : 'Sparkihg'
    })
})

app.use(express.static(publicDirectoryPath))


app.get('*',(req,res)=>{
    res.send('My 404 page')
})

app.listen(3000, ()=>{
    console.log('Server is up and running on port 3000')
})