import obsidianApp from "obsidian-api/lib/integration";

import "./index.css";

const app = obsidianApp({
    htmlNode: "#integration",
    appUrl: "http://localhost:3000",
});

console.log("App ready", app);
