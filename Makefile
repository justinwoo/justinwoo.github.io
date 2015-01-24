WEBPACK_BIN = ./node_modules/.bin/webpack

build:
	$(WEBPACK_BIN) -c --progress
watch:
	$(WEBPACK_BIN) -wdc --progress
