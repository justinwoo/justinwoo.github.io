#!/bin/bash
set -e

# build our app
make build

git config user.name "Travis"
git config user.email "moomoowoo@gmail.com"

# add all our assets
git add -f index.js
git add -f *.eot
git add -f *.ttf
git add -f *.svg
git add -f *.woff

git commit -m "github pages deploy"

# hide my output for security reasons
# force it because we want this to just actually work
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
