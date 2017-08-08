This project will mimic some of the features in [Trello](https://trello.com).

It is built with Ionic and Angular. To get this running on your machine, perform the following steps:

- Install Ionic.
```bash
$ sudo npm install -g ionic cordova
```
- Checkout the repo.
- Install npm packages
```bash
$ npm install
```
- Start the server
```bash
$ ionic serve
```
- From here you should be able to view the app in a web browser at `localhost:8100`

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

