const express = require('express')
const app = express()
const port = 8080
const multer  = require('multer')
const upload = multer({ dest: __dirname+'/uploads' })
const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, "/uploads")

app.post('/profile', upload.single('avatar'), function (req, res) {
    res.redirect("/")
})

app.get('/images', (req, res) => {
    fs.readdir(dirPath, (err, files) => {
        if(err) {
            res.send("you suck")
        } else {
            res.json(files)
        }
    })
})

app.use(express.static('.'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))