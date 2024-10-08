const express = require('express');

const app = express();

// Use app.get for specific routes
app.get("/", (req, res) => {
    res.send("Hello from the server!!!");
})

app.get("/test", (req, res) => {
    res.send("This is the test page.");
})

app.listen(3000, () => {
    console.log("App listening on the port 3000...");
});
