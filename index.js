const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        please: "subscribe"
    });
});

app.listen(process.env.PORT || 6969);