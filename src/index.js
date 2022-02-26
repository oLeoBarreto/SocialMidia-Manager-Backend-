const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

//TODO: Testar Sessao
app.set('trust proxy', 1);
app.use(session({
    secret: '',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(flash());

//Midlleware
app.use((req, res, next) => {
    req.session.cookie.expires = new Date(Date.now() + 3600000); 
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//TODO: Criar rotas para cada api 
app.get('/api/v1', async (req, res, next) => {
    try {
        const { data } = await axios.get('https://viacep.com.br/ws/01001000/json/');   
        return res.json(data);
    } catch (error) {
        console.error(error);
    }
});

//TODO: Criar as da aplicação Routes 


module.exports = app;   