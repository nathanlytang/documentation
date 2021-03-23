#!/usr/bin/env sh

# abort on errors
set -e

# build
cd docs/
npm run build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
echo 'docs.nathanlytang.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:nathanlytang/nathanlytang.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nathanlytang/documentation.git master:gh-pages

cd -