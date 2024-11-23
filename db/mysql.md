# docker部署
参见[dc-mysql](../template/dc-mysql.md)

# 创建数据库
```
CREATE DATABASE <YOUR_DBNAME> CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
# 用户创建&用户授权
```
CREATE USER 'your_username'@'主机名' IDENTIFIED BY '密码';

GRANT ALL PRIVILEGES ON *.* TO 'your_username'@'%';
    GRANT 权限列表 ON 数据库名.表名 TO 'your_username'@'主机名';
    REVOKE 权限列表 ON 数据库名.表名 FROM 'your_username'@'主机名';

FLUSH PRIVILEGES;

SHOW GRANTS FOR 'your_username'@'主机名';
```

# 创建数据表和数据
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

# 导出表结构
```
select TABLE_NAME, COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_COMMENT,COLUMN_KEY,COLUMN_DEFAULT FROM information_schema.columns WHERE table_schema = 'mp0614';

select * from user_col_comments m join USER_TAB_COLUMNS c where m.table_name=c.table_name and m.column_name=c.column_name;
```