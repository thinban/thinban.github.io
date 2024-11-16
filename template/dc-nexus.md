# docker-compose.yml
```
version: '3'
services:
  nexus:
    image: sonatype/nexus3
    container_name: nexus
    restart: always
    ports:
      - 8081:8081
    volumes:
      - nexus-data:/nexus-data
volumes:
  nexus-data:
```

# 查看密码
docker exec -it nexus cat /nexus-data/admin.password