# ObsidianJS Starter

This is a boilerplate for the [ObsidianJS framework](https://github.com/wanadev/obsidianjs); it contains a minimal architecture to start a new project.


## Available Commands

dev:

* `npm run dev` - build the project and run the development server with watch and autoreload
* `npm run lint` - run linting on the project's code
* `npm run lint-fix` - auto fix coding style issues

Prod:

* `npm start` - run the Node.js server
* `npm run release` - build a production ready version of the project

## Development Quick Start

### Folders and Files

```
obsidianjs-starter/
|
+-- build/                            Where your build goes
|
+-- config/                           WebPack configuration
|   |
|   +-- webpack.common.js             Main WebPack configuration
|   |
|   +-- webpack.config.dev.js         Specific overrides for dev
|   |
|   +-- webpack.config.release.js     Specific overrides to release production version
|
+-- docker/                           Files to build Docker images
|
+-- server/                           Server part (if any)
|
+-- src/                              All the code and assets for the frontend part of the app
|   |
|   +-- assets/                       All the images, 3D models, textures, fonts, sounds...
|   |
|   +-- locales/                      Translation files (*.po) of the frontend
|   |
|   +-- modules/                   !! This is where you JavaScript code go (as Obsidian Module)
|   |
|   +-- style/                        Style (CSS, Less,...)
|   |
|   +-- vendors/                      Third party libraries that are not available through NPM
|   |
|   +-- index.html                    The HTML page to start the application
|   |
|   +-- index.js                      The entry point of your Obsidian app. This is where you
|   |                                 load ObsidianJS modules.
```

### Requirements

To work on ObsidianJS projects, you will need:

* Git
* Node.js with NPM
* (optional) Docker and Docker Compose

### Starting a New Project

To start a new project, first clone this repository:

    git clone https://github.com/wanadev/obsidianjs-starter.git

Then edit the `package.json` file to put your project's name and version in it:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  ...
```

```javasript
const app = obsidian("my-project");
```

You may want to edit the project's name in `src/index.js` too:

### Developing (Without Docker)

First install dependencies:

    npm install

Then build the project and start the development server (with file watcher and autoreload):

    npm run dev

You can now access you application on the following address:

* http://localhost:8080/

### Developing (With Docker)

Start the development container with the following command:

    docker-compose -f docker-compose.dev.yml up

You can now access you application on the following address:

* http://localhost:8080/

### Testing In "Production Mode" (With Docker)

You can build and test the production image with the following command:

    docker-compose -f docker-compose.prod.yml up

Then go the the following address to test your app:

* http://localhost:8080/

### Documentation

You will find ObsidianJS documentation here:

* https://wanadev.github.io/obsidianjs/


## Building Production Releases

First install dependencies:

    npm install

Then build the project with the following command:

    npm run release

The result of the build goes to the `build/release/` folder. This folder contains anything required to run in production:

```
build/release/
|
+-- app/             All files of the front part of your application
|
+-- server/          All files of the server part of your application
|                    (you can remove it if not used)
|
+-- node_modules/    All NPM dependencies of the server part of your application
|                    (you can remove it if not used)
|
+-- package.json/    Your application's packages.json
```

If you use the server part, the following configurations are available through environment variables:

* `NODE_ENV` - the environment: `production` (default) or `dev`
* `PORT` - the port on which the server listen (default: `8080`)
