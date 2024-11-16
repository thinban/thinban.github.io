```
version: '3'
services:
  nginx:
    image: nginx
    ports:
      - 80:80
    volumes:
      -./nginx.conf:/etc/nginx/conf.d/default.conf
      -./html:/usr/share/nginx/html
```