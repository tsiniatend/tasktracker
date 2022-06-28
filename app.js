const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { stringify } = require('querystring');
// app.listen(3000);

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://mythsfit1:testingWeak@tasktracker.cfscukx.mongodb.net/', { useNewUrlParser: true}, {useUnifiedTopology: true})
app.use(express.static("public"));
const notesSchema = {
   inpute: String,
}
 const Note = mongoose.model("Note", notesSchema);

app.get("/", function (req, res){
res.sendFile(__dirname + "public/index.html")
})
// console.log("listening to port 3000");

app.post("/", (req, res) => {
    let newNote = new Note({
        inpute: req.body.inpute,
        // title: req.body.title,
        // content: req.body.content
    })
    newNote.save();
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})


const todoSchema = new mongoose.Schema({
    item: String
})
// const Todo = mongoose.model('Todo', todoSchema);
// const itemOne = Todo({item: 'buy code'}).save(function(err) {
//     if (err) throw err;
//     console.log('item saved')
// });
const Todo = mongoose.model('Todo', todoSchema);
const itemOne = Todo({inpute: String }).save(function(err) {
    if (err) throw err;
    console.log('item saved')
});