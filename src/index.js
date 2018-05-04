// obsidian is loaded from a submodule until is is published on npm
import obsidian from "./vendors/obsidian/obsidian/src";

import logoModule from "./modules/logo";

import "./style/index.less";

const app = obsidian("starter-app");

app.load(logoModule);

app.start();
