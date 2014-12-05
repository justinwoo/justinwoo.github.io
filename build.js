#!/usr/bin/env node
var spawn = require('child_process').spawn;
var watch = require('node-watch');
var chalk = require('chalk');
var yargs = require('yargs');
var argv = yargs.argv;

var SRC_DIR = 'src';
var SRC_MAIN = 'src/main.js';
var DIST_MAIN = 'dist/js/main.js';
var SASS_DIR = 'sass';
var SASS_ROOT = 'sass/index.scss';
var DIST_CSS = 'dist/css/index.css';

var BUILD_DEV = false;

if (argv.h || argv.help) {
  console.log('build.js - a simple node program for kicking off my builds.');
  console.log('  flags');
  console.log('  -d / --dev : use development settings (e.g. sourcemapping)');
  console.log('  -w / --watch : watch files for changes and kick off builds accordingly');
  process.exit();
}

if (argv.d || argv.dev) {
  console.log('Using DEV builds');
  BUILD_DEV = true;
}

// Runs every time
buildBrowserify();
buildSass();

if (argv.w || argv.watch) {
  console.log('Watching files for changes');

  watch(SRC_DIR, function () {
    console.log('Kicking off browserify build');
    buildBrowserify();
  });

  watch(SASS_DIR, function () {
    console.log('Kicking off sass build');
    buildSass();
  });
}

// fn (input: string)
function getOutputAggregator(input) {
  return function (data) {
    input += data;
  }
}

// fn (which: string, args: array, startTime: number)
function spawnProcess(which, args, startTime) {
  var child = spawn(which, args);
  var output = '';
  var errors = '';
  child.stdout.on('data', function (data) {
    output += data;
  });
  child.stderr.on('data', function (data) {
    errors += data;
  });
  child.on('close', function () {
    var timeInfo = ' in {TIME} s'.replace('{TIME}', (Date.now() - startTime) / 1000);
    if (which !== 'node-sass') {
      if (errors.length > 0) {
        console.log(chalk.red(which + ' closed with errors' + timeInfo + ':\n' + errors));
      }
    } else {
      console.log(chalk.yellow(errors));
    }
    console.log(chalk.green(which + ' closed' + timeInfo));
  });
}

function buildBrowserify() {
  var args = [
    SRC_MAIN,
    '-t',
    'reactify',
    '-o',
    DIST_MAIN
  ];
  if (BUILD_DEV) {
    args.push('-d');
  }
  spawnProcess('browserify', args, Date.now());
}

function buildSass() {
  var args = [
    SASS_ROOT,
    DIST_CSS
  ];
  if (BUILD_DEV) {
    args.push('--source-map');
  }
  spawnProcess('node-sass', args, Date.now());
}
