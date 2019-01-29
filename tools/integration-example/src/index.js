import obsidianApp from "obsidian-api/lib/integration";

import "./index.css";

const app = obsidianApp({
    htmlNode: "#integration",
    appUrl: process.env.OBSIDIAN_APP_URL,
});


window.app = app;

app.on("ready", () => {
    console.log("App ready", app);
});
