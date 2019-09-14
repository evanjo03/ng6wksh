const express = require('express');

const app = express();

app.listen(4201, "127.0.0.1", () => {
    console.log("Server listening on port 4201");
})