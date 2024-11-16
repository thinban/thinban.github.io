```
version: '3.8'

services:
  mysql:
    image: mysql:latest
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