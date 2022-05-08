const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require("cookie-parser");

const app = express();

// == MIDDLEWARE == //

// Session
app.set('trust proxy', 1);
app.use(session({
    secret: 'dyE3RGSP&mzYZN8mw2d%cmjL_wCKg?g+jASW6Fs4',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}));
app.use(flash());

//Cookies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
}));

// == Application Routes == //
require('./controller/authController')(app);
require('./controller/reminderController')(app);
require('./APIs/twitter')(app);

module.exports = app;   