## docker-compose.yml
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


## 创建数据库
```
CREATE DATABASE <YOUR_DBNAME> CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## 创建数据表和数据
```
CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL COMMENT 'name',
    password VARCHAR(100) NOT NULL COMMENT 'password',
    age INT UNSIGNED DEFAULT 0 COMMENT 'age',
    status TINYINT UNSIGNED DEFAULT 1 COMMENT 'status:1-active,0-inactive',
    bool_del TINYINT UNSIGNED DEFAULT 0 COMMENT '逻辑删除标志 (0 表示未删除，1 表示已删除)',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    created_by INT UNSIGNED DEFAULT 0 COMMENT '创建者的用户ID',
    updated_by INT UNSIGNED DEFAULT 0 COMMENT '最后更新者的用户ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

INSERT INTO users (name, password, age, status, bool_del, created_at, updated_at)
VALUES ('Alice', 'hashed_password_here', 28, 1, 0, NOW(), NOW());
INSERT INTO users (name, password, age, status, bool_del, created_at, updated_at, created_by)
VALUES ('Bob', 'hashed_password_here', 32, 1, 0, NOW(), NOW(), 1);
INSERT INTO users (name, password, age, status, bool_del, created_at, updated_at, created_by, updated_by)
VALUES ('Eve', 'hashed_password_here', 25, 1, 0, NOW(), NOW(), 2, 1);
```
