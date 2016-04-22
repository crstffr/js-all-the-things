#JS All The Things!!1!

* Serve static content via [FeathersJS](http://docs.feathersjs.com/)
* Database of static JSON files via [NeDB](https://github.com/louischatriot/nedb)
* Frontend package management via [JSPM](http://jspm.io/)
* Frontend module loading via [SystemJS](https://github.com/systemjs/systemjs)
* Realtime event system via [SocketIO](http://socket.io/)
* Task runner, Sass compiler via [Gulp](http://gulpjs.com/)
* Desktop application wrapper via [Electron](http://electron.atom.io/)

## Installation

```
$> git clone  git@github.com:crstffr/js-all-the-things.git

$> npm install -g gulp jspm electron-prebuilt nodemon

$> npm install && jspm install

$> gulp server
```

## Gulp Tasks

```
Available tasks
  build             Build the application from source
  bundle            Compile static bundles, takes optional -g argument
  clean             Remove all static build files
  dist              Prepare app for distribution
  server            Start simple server, reload source files on change
  unbundle          Removes static bundles, takes optional -g argument
```

## Run Desktop App

This will run the current application as an Electron desktop app.
An icon will appear in your OS tray, with a couple menu options.

```
$> electron .
```