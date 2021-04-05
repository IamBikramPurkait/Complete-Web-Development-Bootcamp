// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bikramdb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


// db.once('open', function () {
//     console.log("we're connected!");
// });



var kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    var greeting = "My name is : " + this.name
    console.log(greeting);
}

var Kitten = mongoose.model('bikramkitty', kittySchema);


var bikramkitty = new Kitten({ name: 'bikramkitty' });
var bikramkitty2 = new Kitten({ name: 'bikramkitty2' });

// console.log(bikramkitty.name);
// bikramkitty.speak();


bikramkitty.save(function (err, bikramkitty) {
    if (err) return console.error(err);
    bikramkitty.speak();
});

bikramkitty2.save(function (err, bikramkitty2) {
    if (err) return console.error(err);
    bikramkitty2.speak();
});


Kitten.find({name:'bikramkitty'} , function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})

Kitten.find({name:'bikramkitty2'} , function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})



