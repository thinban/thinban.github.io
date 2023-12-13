#!/usr/bin/env sh
set -e
pnpm build
mv .vitepress/dist ./docs
git add .
git commit -m 'deploy'
git push