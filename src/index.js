import "@babel/polyfill";
import obsidian from "@obsidianjs/obsidian";

import logoModule from "./modules/logo";
import logoColorChangerModule from "./modules/logoColorChanger";

import "./style/index.less";

const app = obsidian("starter-app");

app.use(logoModule);
app.use(logoColorChangerModule);

app.start();
