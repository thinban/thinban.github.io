# basic conf
```
upstream backend_server {
    server backend1.example.com;
}

server {
  listen 80;
  listen [::]:80;

  server_name _;

  root /var/www/html;
  index index.html;

  location / {
     try_files $uri $uri/ =404;
     #index  index.html;
  }

  location /static {
    #default_type text/html;
    autoindex on;
  }

  location /proxy {
    proxy_pass http://backend_server;
  }
}
```