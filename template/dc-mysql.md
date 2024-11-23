```
version: '3.8'

services:
  mysql:
    # image: mysql:latest 用Docker升级MySQL时报错Fatal glibc error: CPU does not support x86-64-v2，在网上找了很久资料，发现是 MySQL 的新镜像使用的是 Oracle Linux 9，当前服务器的CPU无法安装这个所以报错，解决方法就是更换镜像版本
    image: mysql:8.4.0-oraclelinux8
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: your_root_password
      MYSQL_DATABASE: your_database_name
      MYSQL_USER: your_username
      MYSQL_PASSWORD: your_password
    ports:
      - "3306:3306"
    volumes:
      - ./mysql_data:/var/lib/mysql
```