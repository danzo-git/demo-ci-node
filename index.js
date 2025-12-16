const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "CI/CD Dockodjkdvndknvckdncvkn er + +ssh server+ Node.js fonctionne ! 🚀" });
});

app.listen(3000, () => {
    console.log("Server running odjkdvndknvckdncvkn port 3000");
});
