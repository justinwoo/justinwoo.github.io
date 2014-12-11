#!/usr/bin/env phantomjs
var system = require('system');
var page = require('webpage').create();
var address = system.args[1];

page.open(address, function () {
  var documentBody = page.evaluate(function (selector) {
    return document.body.innerHTML
  });
  system.stdout.writeLine(documentBody);
  phantom.exit();
});
