# 安装
```shell
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo systemctl enable docker
```
# 国内无法访问下载 Docker 镜像的多种解决方案
https://isedu.top/index.php/archives/225/#menu_index_7

列出了多种方法，包括添加镜像、Docker 使用 HTTP 代理、CF worker绑定自定义域名、自建等，由于第二步就生效了，就没有测试其他方法。

## 1. 添加镜像（不生效）
无法拉取镜像（registry-1.docker.io time out)
```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://huecker.io",
        "https://dockerhub.timeweb.cloud",
        "https://noohub.ru"
    ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 2. Docker 使用 HTTP 代理(生效)
```
mkdir -p /etc/systemd/system/docker.service.d
vim /etc/systemd/system/docker.service.d/http-proxy.conf
    [Service]
    Environment="HTTP_PROXY=http://USERNAME:PASSWORD@[your.proxy.server]:[port]"
    Environment="HTTPS_PROXY=http://USERNAME:PASSWORD@[your.proxy.server]:[port]0"
    Environment="NO_PROXY=localhost,127.0.0.1,.example.com"
systemctl daemon-reload
systemctl restart docker
# 检查配置
systemctl show --property=Environment docker
```


# 容器ip获取
```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' XXX
```