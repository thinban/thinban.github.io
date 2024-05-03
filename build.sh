#!/usr/bin/env sh
set -e
npm run build
rm -fr ./docs
mv .vitepress/dist ./docs
git add .
git commit -m 'deploy'
git push