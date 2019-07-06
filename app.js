var path = require('path');
var express = require('express');
var multer  = require('multer');
var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/cadastro',(req,res) => {
    res.sendfile('public/cadastro.html');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/criacaoDeEvento',(req,res) => {
    res.sendfile('public/criacaoDeEvento.html');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/querParticiparDoEvento',(req,res) => {
    res.sendfile('public/querParticiparDoEvento.html');
});

// Exemplo de rota para envio de dados de formulário
// app.post('/teste', function (req, res) {
//   console.log(req.body);
//   res.send(req.body);
// });

// Exemplo de rota para acesso a paginas do sistema
// app.get('/form',(req,res) => {
//   res.sendfile('public/form.html');
// })

app.listen(5000);