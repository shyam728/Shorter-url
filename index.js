const express = require("express");
const db = require('./Config/mongoose');
const bodyParser = require('body-parser');
const urlRoute = require("./routers/url");
const userRoute = require("./routers/user")
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/url", urlRoute);
app.use("/user", userRoute);


app.listen(port, async () => {
    try {
        console.log(`server is running on ${port}`);
    }
    catch (err) {
        console.log(err);
    }
})