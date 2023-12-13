## start
```shell
pnpm i
pnpm dev
pnpm build
pnpm serve
```

## docs目录为gitpage
```shell
#!/usr/bin/env sh
set -e
pnpm build
mv .vitepress/dist ./docs
git add .
git commit -m 'deploy'
git push
```
