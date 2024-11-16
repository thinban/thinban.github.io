# docker部署
参见[dc-nexus](../template/dc-nexus.md)

# 仓库初始化
- 点击页面右上角的用户名，选择 “Administration” 进入管理界面。
- Repositories => Create repository
- 选择 “maven2 (hosted)” 作为仓库类型，输入仓库名称（例如my-maven-repo），设置版本策略（如Release或Snapshot，根据你的需求）和布局策略（一般选择Maven 2 Strict）。点击 “Create repository” 按钮完成仓库创建。

# 项目配置
## pom
```
<repositories>
  <repository>
    <id>my-maven-repo</id>
    <url>http://localhost:8081/repository/my-maven-repo/</url>
  </repository>
</repositories>

<distributionManagement>
  <repository>
    <id>my-maven-repo</id>
    <url>http://localhost:8081/repository/my-maven-repo/</url>
  </repository>
  <snapshotRepository>
    <id>my-maven-repo</id>
    <url>http://localhost:8081/repository/my-maven-repo/</url>
  </snapshotRepository>
</distributionManagement>
```
## settings.xml
```
<servers>
  <server>
    <id>my-maven-repo</id>
    <username>admin</username>
    <password>your_admin_password</password>
  </server>
</servers>
```