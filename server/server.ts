const express = require('express');
// const router = express.Router()

const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})


app.use(express.json());

app.get("/", (req, res) => {
        res.send([{
            message: "Hello there"
        }]
    );
})
app.get("/users", (req, res) => {
    res.send([{
        message: "users"
    }]);
})
app.post("/users", (req, res) => {
    console.log(req.body)
    res.send({body: req.body})
})





app.listen(4201, "127.0.0.1", () => {
    console.log("Server listening on port 4201");
})