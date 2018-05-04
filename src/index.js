// obsidian is loaded from a submodule until is is published on npm
import obsidian from "./vendors/obsidian/obsidian/src";

import demoModule from "./modules/demo";

import "./style/index.less";

const app = obsidian("starter-app");

app.load(demoModule);

app.start();
