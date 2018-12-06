const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const cors = require('cors');

require("./models/Users");
require("./services/passport");


const mongoURL = 'mongodb://localhost:27017/cheese';

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, { useNewUrlParser: true });

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send("Hello World");
});

require("./routes/authRoutes")(app);
require("./routes/recipeRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("The Express server am running");
});
