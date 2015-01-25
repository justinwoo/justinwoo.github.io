#!/bin/bash
set -e

# build our app
make build

# copy assets to pages
rm -rf pages || exit 0;
mkdir pages;
cp CNAME pages
cp index.html pages
cp -r dist pages/dist

# initialize and commit everything in pages
cd pages
git init
git config user.name "Travis"
git config user.email "Travis"
git add .
git commit -m "github pages deploy"

# hide my output for security reasons
# force it because we want this to just actually work
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master > /dev/null 2>&1
