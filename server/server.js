require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('<h1>Bienvenido a mi servidor REST (localhost)</h1>');
});

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/login'));
app.use(require('./routes/producto'));

mongoose.connect('mongodb+srv://admin:Bradopds23@cluster0.nnahn.mongodb.net/cafeteria', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}, (err, res) => {
    if (err) throw err;
    console.log('La Base de Datos se encuentra EN LINEA');
});


app.listen(process.env.PORT, () => {
    console.log('El servidor esta en linea en el puerto ', process.env.PORT);
});