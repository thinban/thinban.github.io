# vitepress
- https://vitepress.dev/guide/getting-started
- npm run docs:dev -- --host  # linux export

## 使用场景
### 命令行获取文本
curl d.thinban.top/mysql.md

### 网页查看博客
https://blog.thinban.top

### 相关nginx配置
```
server {
        listen 80;
        listen [::]:80;

        server_name d.thinban.top tb;

        root /var/www/blog;
        index index.html;
        location / {
          #default_type text/html;
          autoindex on;
        }
}

server {
  listen 80;
  listen [::]:80;

  server_name blog.thinban.top;

  root /var/www/blog/.vitepress/dist;
  #root /var/www/blog;
  index index.html;
  location / {
     try_files $uri $uri/ =404;
     #index  index.html;
  }
}
```

## 发布流程
- 一、编写
- 添加markdown文件
- sh buildmenu.sh，配置到.vitepress/config.mts
- git提交

- 二、服务器
- git pull
- npm run docs:build
