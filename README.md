# 项目打包
    https://vitepress.dev/guide/getting-started
            npm config set registry https://registry.npmmirror.com
            #npm config rm registry
            npm add -D vitepress
    npm run docs:dev -- --host
    npm run docs:build
# 推送仓库
git add .&&git commit -m 'deploy'&&git push -u main main