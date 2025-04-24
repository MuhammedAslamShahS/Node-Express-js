const express = require("express");
const app = express();

const Token = require("./middleware/Token");
const Validation = require("./middleware/Validation");

// app.use(express.static("views"));

app.use(DateGenerator);

const middleware = [Token, Validation];

const PORT = process.env.PORT || 3001;

app.get("/profile", middleware, (req, res) => {
    console.log(`user Loged`);
    res.send("<h1>success</h1>");
});

function DateGenerator(req, res, next) {
    console.log(new Date());
    next();
}

app.listen(PORT);
