#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navegate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo  'www.example.com' > CHAME

git init 
git checkout -b main
git add -A
git commit -m 'deploy'


#if you are deploying to https://<USERNAME>.github.io
#giut push -f git@github.com:<USERNAME>/<USERNAME>.github.io/<REPO>

#if you are deploying to https://<USERANME>.github.io/<REPO>
#git push -f gihub.com:YilbertLuna/SpaceX-Launches-List.git main:gh-pages
