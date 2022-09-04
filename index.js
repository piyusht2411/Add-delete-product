const express = require('express');
const db = require('./config/mongoose');
const Api = require('./models/schema');
const path = require('path');
const vie = path.join(__dirname, 'views');
const app = express();
const dirpath = path.join(__dirname);
app.set('view engine', 'ejs');
app.set('views', vie);
app.use(express.urlencoded());
app.use(express.static('assets'));

app.post('/create-product', (req, resp) => {
    Api.create({
       product : req.body.product
    }, function (err, newproduct) {
        if (err) {
            console.log("Error!");
            return;
        }
        console.log('*****', newproduct);
        return resp.redirect('back');
    })
})

app.get('/', (req, resp) => {
    Api.find({}, (err, products) => {
        if (err) {
            console.log("err");
            return;
        }
        return resp.render('index', {
            product_list: products
        })
    })
})
app.get('/delete-product', (req, resp) => {
    console.log("deleted",req.query)
    let id = req.query.id;

    Api.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log("error!");
            return;
        }
        return resp.redirect('back');
    });

})
app.listen(4500, (err) => {
    if (err) {
        console.log("Error");
        return resp.send("Error during connecting port");
    }
    console.log("Succesfully connected to the port 4500");
})


