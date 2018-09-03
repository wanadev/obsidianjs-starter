const express = require("express");

const NODE_ENV = process.env.NODE_ENV || "production";
const PORT = process.env.PORT || 8080;

const app = express();

if (NODE_ENV === "dev") {
    require("./webpack")(app);
}

console.log(`Starting Obsidian static server on 0.0.0.0:${PORT} [${NODE_ENV}]`);
app.listen(PORT);
