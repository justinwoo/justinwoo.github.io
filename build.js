#!/usr/bin/env node
var spawn = require('child_process').spawn;
var watch = require('node-watch');
var chalk = require('chalk');
var yargs = require('yargs');
var argv = yargs.alias('w', 'watch').argv;

var SRC_DIR = 'src';
var SRC_MAIN = 'src/main.js';
var DIST_MAIN = 'dist/js/main.js';
var SASS_DIR = 'sass';
var SASS_ROOT = 'sass/index.scss';
var DIST_CSS = 'dist/css/index.css';

// fn (input: string)
function getOutputAggregator(input) {
  return function (data) {
    input += data;
  }
}

// fn (which: string, args: array)
function spawnProcess(which, args) {
  var browserify = spawn(which, args);
  var output = '';
  var errors = '';
  browserify.stdout.on('data', function (data) {
    output += data;
  });
  browserify.stderr.on('data', function (data) {
    errors += data;
  });
  browserify.on('close', function () {
    if (which !== 'node-sass') {
      if (errors.length > 0) {
        console.log(chalk.red(which + ' closed with errors:\n' + errors));
      } else {
        console.log(chalk.green(which + ' closed successfully.'));
      }
    } else {
      console.log(chalk.yellow(errors));
    }
  });
}

function buildBrowserify () {
  var args = [
    SRC_MAIN,
    '-t',
    'reactify',
    '-o',
    DIST_MAIN
  ];
  spawnProcess('browserify', args);
}

function buildSass() {
  var args = [
    SASS_ROOT,
    DIST_CSS
  ];
  spawnProcess('node-sass', args);
}

// Runs every time
buildBrowserify();
buildSass();

if (argv.watch) {
  watch(SRC_DIR, function () {
    console.log('Kicking off browserify build');
    buildBrowserify();
  });

  watch(SASS_ROOT, function () {
    console.log('Kicking off sass build');
    buildSass();
  });
}
