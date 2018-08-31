const express = require("express");

const TARGET = process.env.TARGET || "dev";
const PORT = process.env.PORT || 8080;

const app = express();

if (TARGET === "dev") {
    require("./webpack")(app);
}

console.log(`Starting Obsidian static server on 0.0.0.0:${PORT} [${TARGET}]`);
app.listen(PORT);
